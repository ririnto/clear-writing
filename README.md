# Clear Writing

Use Clear Writing to revise a draft, write documentation, compare options, or turn work notes into a concise update.
Tell the agent what you need and provide the material it should use.
The skill removes generic disclaimers, redundant contextual caveats, repetition, and writing-process narration, with exceptions for purpose-built text such as LICENSE notices.
It presents enumerated items as lists or comparison tables and preserves limitations that affect the reader's decision.

[Install](#install-from-a-marketplace) · [Use Clear Writing](#use-clear-writing) · [Example requests](#example-requests) · [Local packages](#local-packages) · [Adjust the result](#adjust-the-result)

## Install from a marketplace

This repository hosts the `clear-writing` marketplace for Claude Code, Copilot CLI, Codex CLI, and Cursor.
Choose your client below.

### Claude Code

Run these commands in a terminal:

```sh
claude plugin marketplace add ririnto/clear-writing
claude plugin install clear-writing@clear-writing
```

Start a new session with `claude`, then use `/clear-writing:write-clearly` in your prompt.

### GitHub Copilot CLI

Run these commands in a terminal:

```sh
copilot plugin marketplace add ririnto/clear-writing
copilot plugin install clear-writing@clear-writing
```

Start a new session with `copilot`, then use `/write-clearly` in your prompt.

### Codex CLI

Run these commands in a terminal:

```sh
codex plugin marketplace add ririnto/clear-writing
codex plugin add clear-writing@clear-writing
```

Start a new session with `codex`, then use `$write-clearly` in your prompt.

To install through the interactive browser, register the marketplace with the first command, open `/plugins` in Codex, and select Clear Writing from the `clear-writing` marketplace.
Start a new session after installation.

### Cursor

1. Open **Customize** in Cursor's sidebar.
2. Select **From GitHub Repository** and enter `https://github.com/ririnto/clear-writing`.
3. Select **Clear Writing**, choose **Install**, and choose user or project scope.
4. In Agent chat, type `/` and select **write-clearly**.

### ChatGPT

1. If Clear Writing is available to your account, open [Clear Writing in ChatGPT](https://chatgpt.com/plugins/plugins_6ae33d6bae648191912be7759cde15cc) or find it in **Plugins**, then select the plus button to install it.
2. Start a new chat.
3. Type `@` and select **Clear Writing** or its **write-clearly** skill.

## Use Clear Writing

Select the skill using your client's invocation method above, then send a request with your draft, notes, or source material:

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

## Local packages

To work from a local checkout, clone the repository:

```sh
git clone https://github.com/ririnto/clear-writing.git
```

Replace `/absolute/path/to/clear-writing` below with the checkout's absolute path.

- **Claude Code:** Run `claude --plugin-dir /absolute/path/to/clear-writing`, then invoke `/clear-writing:write-clearly`.
- **Copilot CLI:** Run `copilot plugin install /absolute/path/to/clear-writing`, start a new `copilot` session, then invoke `/write-clearly`.
- **Codex CLI:** Run `codex plugin marketplace add /absolute/path/to/clear-writing`, then `codex plugin add clear-writing@clear-writing`.
  Start a new `codex` session and invoke `$write-clearly`.
- **Cursor:** Copy the package contents to `~/.cursor/plugins/local/clear-writing/`, with `plugin.json` directly inside that directory.
  Run **Developer: Reload Window**, then type `/` in Agent chat and select **write-clearly**.
  Managed workspaces must allow local plugin imports.

## Adjust the result

Give a direct follow-up instruction to refine the same draft:

- “Shorten this to three paragraphs.”
- “Keep the technical detail and make it easier to scan.”
- “Put the alternatives in a table.”
- “Make the README focus on installation and everyday use.”

Name the target audience, language, and length whenever they affect the result.
For reusable examples, see [response patterns](skills/write-clearly/references/response-patterns.md) and [formatting examples](skills/write-clearly/references/formatting-examples.md).
