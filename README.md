# Clear Writing

Use Clear Writing to revise a draft, write documentation, compare options, or turn work notes into a concise update.
Tell the agent what you need and provide the material it should use.

[Get started](#get-started) · [Other agents](#other-agents) · [Example requests](#example-requests) · [Adjust the result](#adjust-the-result)

## Get started

1. If Clear Writing is available to your ChatGPT account, open [Clear Writing in ChatGPT](https://chatgpt.com/plugins/plugins_6ae33d6bae648191912be7759cde15cc) and select the plus button to install it.
2. Start a new chat.
3. Type `@`, select **Clear Writing** or its **write-clearly** skill, and send your request with the draft, notes, or source material.

For a quick edit, paste your text after this request:

```text
Revise this draft for clarity and easy reading.
Keep its meaning, qualifications, values, and units.
Return the revised text in English.

<paste your draft>
```

> [!TIP]
>
> Include the intended reader and output format when they matter.
>
> For example: “Write a Korean update for the team, under 150 words.”

## Other agents

The plugin is named `clear-writing`, and its skill is named `write-clearly`.
For the local package commands below, replace `/absolute/path/to/clear-writing` with the directory containing `plugin.json`.

- **Claude Code:** Start with `claude --plugin-dir /absolute/path/to/clear-writing`, then enter `/clear-writing:write-clearly` with your request.
- **Copilot CLI:** Run `copilot plugin install /absolute/path/to/clear-writing`, start `copilot`, then enter `/write-clearly` with your request.
- **Cursor:** Copy the package contents to `~/.cursor/plugins/local/clear-writing/`, with `plugin.json` directly inside that directory.
  Run **Developer: Reload Window**, then type `/` in Agent chat and select `write-clearly`.
  Managed workspaces must allow local plugin imports.
- **Codex CLI:** With Clear Writing installed and enabled, start a new session and prefix your request with `$write-clearly`.
  Use `/plugins` to manage installed plugins.

## Example requests

Select the skill using your agent's invocation method, then adapt one of these requests.
Replace the bracketed material with your own input.

### Write a README

```text
Write a README for new users of this project.
Lead with a working quick start, then cover common tasks and configuration.
Use these project details and commands:

<purpose, prerequisites, installation command, minimal example, options>
```

### Compare options

```text
Recommend an option using the requirements and measurements below.
Lead with the recommendation, then show a compact comparison table.
Express the acceptance conditions in LaTeX and define the symbols.

<options, measurements, units, measurement conditions, requirements>
```

### Explain dependencies

```text
Turn these work items into an implementation guide.
Show prerequisites in a Mermaid dependency graph.
Explain which tasks can run in parallel and what each task needs to begin.

<tasks and their prerequisites>
```

### Report completed work

```text
Turn these work notes into a short completion update for the team.
Lead with the delivered result and describe its effect on users.
Include the supporting check results and the next action that matters.

<changes, observed results, relevant next action>
```

### Prepare a handoff

```text
Write a handoff another agent can use to continue this task.
Include the current state, decisions, relevant files, and next action.
Write in English.

<task notes, decisions, paths, and next action>
```

## Adjust the result

Give a direct follow-up instruction to refine the same draft:

- “Shorten this to three paragraphs.”
- “Keep the technical detail and make it easier to scan.”
- “Put the alternatives in a table.”
- “Make the README focus on installation and everyday use.”

Name the target audience, language, and length whenever they affect the result.
For reusable examples, see [response patterns](skills/write-clearly/references/response-patterns.md) and [formatting examples](skills/write-clearly/references/formatting-examples.md).
