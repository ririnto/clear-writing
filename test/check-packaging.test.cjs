const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const plugin = { name: "clear-writing", version: "2026.11.27-1" };
const marketplace = { name: "clear-writing", plugins: [{ ...plugin, source: "./" }] };

const cases = [
  ["accepts aligned versions and one skill", {}, 0, /2026\.11\.27-1\./],
  ["accepts a multi-digit sequence", {}, 0, /2026\.11\.27-12\./, "2026.11.27-12"],
  ["accepts a zero-padded month and day", {}, 0, /2026\.01\.02-1\./, "2026.01.02-1"],
  ...["2026.11.27.01", "2026.11.27", "2026.11.27-01", "2026.11.27-1.2", "2026.11.27-0"].map(
    (version) => [
      `rejects version ${version} even when versions match`,
      {},
      1,
      /\.claude-plugin\/plugin\.json.*expected version in yyyy\.MM\.dd-seq format/,
      version,
    ],
  ),
  ["rejects a version mismatch", {
    ".codex-plugin/plugin.json": { ...plugin, version: "2026.11.27-2", skills: "./skills/" },
    ".agents/plugins/marketplace.json": {
      ...marketplace,
      plugins: [{ ...plugin, version: "2026.11.27-2", source: { source: "local", path: "./" } }],
    },
  }, 1, /\.codex-plugin\/plugin\.json.*expected version 2026\.11\.27-1/],
  ["rejects a different plugin name", {
    ".cursor-plugin/plugin.json": { ...plugin, name: "other" },
  }, 1, /\.cursor-plugin\/plugin\.json.*expected plugin name/],
  ["rejects a restored root manifest", { "plugin.json": plugin }, 1, /Remove plugin\.json/],
  ["rejects a higher-priority Copilot manifest", {
    ".plugin/plugin.json": { ...plugin, name: "other" },
  }, 1, /Remove \.plugin\/plugin\.json/],
  ["rejects a higher-priority Copilot marketplace", {
    ".github/plugin/marketplace.json": { name: "other", plugins: [] },
  }, 1, /Remove \.github\/plugin\/marketplace\.json/],
  ["rejects a marketplace that points away from the plugin", {
    ".claude-plugin/marketplace.json": {
      ...marketplace,
      plugins: [{ name: "clear-writing", source: "./missing" }],
    },
  }, 1, /\.claude-plugin\/marketplace\.json.*repository root/],
  ["rejects a conflicting Claude marketplace skills override", {
    ".claude-plugin/marketplace.json": {
      ...marketplace,
      plugins: [{ ...marketplace.plugins[0], strict: false, skills: "./skills" }],
    },
  }, 1, /\.claude-plugin\/marketplace\.json.*skills override requires strict mode/],
  ["rejects a Cursor prefix that moves the package", {
    ".cursor-plugin/marketplace.json": {
      ...marketplace,
      metadata: { pluginRoot: "./missing" },
    },
  }, 1, /\.cursor-plugin\/marketplace\.json.*repository root/],
  ["rejects a non-local Codex marketplace source", {
    ".agents/plugins/marketplace.json": {
      ...marketplace,
      plugins: [{ name: "clear-writing", source: { source: "git", path: "./" } }],
    },
  }, 1, /\.agents\/plugins\/marketplace\.json.*local plugin/],
  ["rejects a stale marketplace entry version", {
    ".cursor-plugin/marketplace.json": {
      ...marketplace,
      plugins: [{ ...marketplace.plugins[0], version: "2026.11.26-1" }],
    },
  }, 1, /\.cursor-plugin\/marketplace\.json.*expected entry version 2026\.11\.27-1/],
  ["rejects a marketplace entry without a version", {
    ".cursor-plugin/marketplace.json": {
      ...marketplace,
      plugins: [{ name: "clear-writing", source: "./" }],
    },
  }, 1, /\.cursor-plugin\/marketplace\.json.*expected entry version 2026\.11\.27-1/],
  ["rejects a Codex skills path that hides the packaged skill", {
    ".codex-plugin/plugin.json": { ...plugin, skills: "./missing" },
  }, 1, /\.codex-plugin\/plugin\.json.*shared skills directory/],
  ["rejects a missing skill", { "skills/clear-writing/SKILL.md": null }, 1, /Expected only skills\/clear-writing/],
  ["rejects a second discoverable skill", {
    "skills/extra/nested/SKILL.md": "---\nname: nested\ndescription: Another fixture.\n---\n",
  }, 1, /skills[\\/]extra[\\/]nested[\\/]SKILL\.md/],
  ["rejects missing skill discovery metadata", {
    "skills/clear-writing/SKILL.md": "---\nname: clear-writing\n---\n",
  }, 1, /expected a non-empty frontmatter description/],
  ["rejects a blank skill description", {
    "skills/clear-writing/SKILL.md": "---\nname: clear-writing\ndescription: '' # Empty\n---\n",
  }, 1, /expected a non-empty frontmatter description/],
  ["accepts an indented skill description", {
    "skills/clear-writing/SKILL.md": "---\nname: clear-writing\ndescription:\n  A fixture.\n---\n",
  }, 0, /2026\.11\.27-1\./],
  ["accepts a folded skill description", {
    "skills/clear-writing/SKILL.md": "---\nname: clear-writing\ndescription: >-\n  A fixture.\n---\n",
  }, 0, /2026\.11\.27-1\./],
  ["rejects a renamed skill", {
    "skills/clear-writing/SKILL.md": "---\nname: other\ndescription: A fixture.\n---\n",
  }, 1, /expected frontmatter name/],
];

for (const [label, changes, status, output, version = plugin.version] of cases) {
  test(label, (context) => {
    const manifest = { ...plugin, version };
    const catalog = { ...marketplace, plugins: [{ ...manifest, source: "./" }] };
    const fixture = {
      ".claude-plugin/plugin.json": manifest,
      ".claude-plugin/marketplace.json": catalog,
      ".codex-plugin/plugin.json": { ...manifest, skills: "./skills/" },
      ".agents/plugins/marketplace.json": {
        ...catalog,
        plugins: [{ ...manifest, source: { source: "local", path: "./" } }],
      },
      ".cursor-plugin/plugin.json": manifest,
      ".cursor-plugin/marketplace.json": catalog,
      "skills/clear-writing/SKILL.md": "---\r\nname: 'clear-writing'\r\ndescription: A fixture.\r\n---\r\n",
    };
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "clear-writing-packaging-"));
    context.after(() => fs.rmSync(root, { recursive: true, force: true }));
    for (const [relativePath, data] of Object.entries({ ...fixture, ...changes })) {
      if (data === null) continue;
      const file = path.join(root, relativePath);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, typeof data === "string" ? data : JSON.stringify(data));
    }
    const result = spawnSync(process.execPath, [path.join(__dirname, "../scripts/check-packaging.cjs"), root], {
      encoding: "utf8",
    });
    assert.ifError(result.error);
    assert.equal(result.status, status, result.stderr);
    assert.match(status === 0 ? result.stdout : result.stderr, output);
  });
}
