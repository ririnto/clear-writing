const fs = require("node:fs");
const path = require("node:path");

const name = "clear-writing";
const skill = "skills/clear-writing/SKILL.md";
const packages = [
  [".claude-plugin/marketplace.json", ".claude-plugin/plugin.json"],
  [".agents/plugins/marketplace.json", ".codex-plugin/plugin.json", "codex"],
  [".cursor-plugin/marketplace.json", ".cursor-plugin/plugin.json"],
];

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    throw new Error(`${file}: ${error.message}`);
  }
}

function requireCondition(condition, message) {
  if (!condition) throw new Error(message);
}

function isLocalPath(value) {
  return typeof value === "string" && value.startsWith("./") && !value.split("/").includes("..");
}

function checkPackaging(root) {
  requireCondition(
    !fs.lstatSync(path.join(root, "plugin.json"), { throwIfNoEntry: false }),
    "Remove the root plugin.json.",
  );

  const versions = packages.map(([marketplaceFile, manifestFile, format]) => {
    const marketplace = readJson(path.join(root, marketplaceFile));
    requireCondition(marketplace?.name === name, `${marketplaceFile}: expected marketplace name ${name}.`);
    const entries = Array.isArray(marketplace.plugins)
      ? marketplace.plugins.filter((entry) => entry?.name === name)
      : [];
    requireCondition(entries.length === 1, `${marketplaceFile}: expected one ${name} entry.`);
    const [entry] = entries;
    const codex = format === "codex";
    const source = codex ? entry.source?.path : entry.source;
    requireCondition(
      isLocalPath(source) && (!codex || entry.source?.source === "local") &&
        path.resolve(root, source) === root,
      `${marketplaceFile}: ${name} must point to the repository root as a local plugin.`,
    );

    const manifest = readJson(path.resolve(root, source, manifestFile));
    requireCondition(manifest?.name === name, `${manifestFile}: expected plugin name ${name}.`);
    requireCondition(
      typeof manifest.version === "string" && manifest.version.trim() !== "",
      `${manifestFile}: expected a non-empty version.`,
    );
    requireCondition(
      entry.version === undefined || entry.version === manifest.version,
      `${marketplaceFile}: expected entry version ${manifest.version}, got ${entry.version}.`,
    );

    const skillPaths = [manifest.skills, entry.skills].filter((value) => value !== undefined).flat();
    requireCondition(
      (!codex || typeof manifest.skills === "string") && skillPaths.every(
        (value) => isLocalPath(value) && path.resolve(root, source, value) === path.join(root, "skills"),
      ) && manifest.skills?.length !== 0 && entry.skills?.length !== 0,
      `${manifestFile} and ${marketplaceFile}: skills must resolve to the shared skills directory.`,
    );
    return { manifestFile, version: manifest.version };
  });

  const [{ version }] = versions;
  for (const manifest of versions.slice(1)) {
    requireCondition(
      manifest.version === version,
      `${manifest.manifestFile}: expected version ${version}, got ${manifest.version}.`,
    );
  }

  const skills = path.join(root, "skills");
  const directories = fs.existsSync(skills) ? fs.readdirSync(skills, { withFileTypes: true }) : [];
  const discovered = directories
    .filter((entry) => !entry.name.startsWith(".") && entry.isDirectory())
    .map((entry) => path.join(skills, entry.name, "SKILL.md"))
    .filter((file) => fs.statSync(file, { throwIfNoEntry: false })?.isFile());
  const expected = path.join(root, skill);
  requireCondition(
    discovered.length === 1 && discovered[0] === expected,
    `Expected only ${skill}, found ${discovered.map((file) => path.relative(root, file)).sort().join(", ") || "none"}.`,
  );

  const frontmatter = fs.readFileSync(expected, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1];
  const names = frontmatter?.match(/^name[ \t]*:.*$/gm) ?? [];
  requireCondition(
    names.length === 1 && /^name[ \t]*:[ \t]+(?:clear-writing|"clear-writing"|'clear-writing')[ \t]*(?:[ \t]+#.*)?$/.test(names[0]),
    `${skill}: expected frontmatter name ${name}.`,
  );

  return version;
}

try {
  const root = path.resolve(process.argv[2] ?? path.join(__dirname, ".."));
  const version = checkPackaging(root);
  console.log(`Packaging check passed for ${name} ${version}.`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
