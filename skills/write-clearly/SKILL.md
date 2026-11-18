---
name: write-clearly
description: Draft, revise, or review prose for a specific reader. Use for explanations, documentation, comparisons, progress updates, completion reports, handoffs, and agent instructions.
---

# Clear Writing

Deliver the text the user asked for in the specified language, tone, length, and format.
A request for just the revised passage or a single table is complete when that passage or table is ready.

## Write for the reader

Answer the immediate question first in conversation.
Organize a document around what its reader needs to do or understand.
For material written on someone's behalf, introduce the affected feature, decision, or event in terms the recipient recognizes.
Supply enough background for someone who missed the conversation.
Use the user's and sources' terminology where it adds precision, and explain unfamiliar terms at first use.

Use prior conversations or memory only when they change the current answer.
Remove generic disclaimers, irrelevant exclusions, repeated conclusions, and narration of the writing process.
Keep disclosures required by the purpose and concrete limitations that affect a decision.
When a document has supporting pages, keep its conclusions, requirements, and material qualifications together in the main document.
Link to detailed evidence or procedures in one place.

## Respect the editing request

For a targeted edit, change only the requested feature and retain the author's wording and voice elsewhere.
When editing a rule, revise it where it is defined and update the passages that depend on it.
For a review, report the issue and its effect.
For a rewrite, deliver the revised text.
Preserve who does what, under which conditions, how often, and with what degree of certainty or obligation.
Check numbers, units, identifiers, links, and code against the source.
Keep exact quotations and required notices verbatim.
For example, changing “may retry once” to “retries once” turns a possibility into a promise.

Use complete sentences for reasoning and concise, parallel phrases for labels or table cells.
Omit em dashes in authored prose and unnecessary quotation marks around ordinary labels.
Preserve proper names, acronyms, and code identifiers in headings.

## Report what the evidence shows

Link external facts and figures to directly supporting sources and place assumptions beside the claims they qualify.
For time-sensitive external facts, give the check date and scope.
Compare measurements under matching conditions and state the units.
Identify differences that limit a comparison and distinguish observations from interpretations or proposals.

A progress update explains what changed and why it matters.
Make a completion report usable on its own by naming the delivered result, how it was checked, and any remaining issue that affects use.
Use status verbs that match the record, especially when a change has passed a check but still awaits deployment.
For a handoff, include the current state, decisions that constrain the work, relevant paths or records, and the next action or blocker.

## Choose the form

Use the requested format first.
When choosing a form, match it to the relationship the reader needs to see.

| Reader's task | Form |
| --- | --- |
| Follow a reason or consequence | A paragraph on one idea |
| Follow steps in order | A numbered list |
| Scan parallel items | A bulleted list |
| Look up a mapping or compare alternatives | A compact table with one row per subject and shared criteria in columns |
| Notice an essential condition or caution | A GitHub Alert where supported |
| Trace branching, dependencies, or state changes | A Mermaid diagram when the relationships benefit from it |
| Read a formula or a precise symbolic relationship | LaTeX with symbols and units defined nearby |

Use descriptive Markdown headings in hierarchy and reserve bold for emphasis within text.
Keep list hierarchy explicit and longer interpretation outside tables.
Write one prose sentence per Markdown source line, with one blank line between paragraphs and around headings, lists, tables, and fences.
Keep separate sentences on separate lines without semicolons or fixed-width reflow.
Use repository formatting checks where applicable.
When rendering needs verification, inspect the affected element at the intended reading width.

## Task-specific guidance

- For prompts, skills, or project instructions, read [Agent instructions](references/agent-instructions.md).
- For examples of completion reports and evidence-based recommendations, see [Response examples](references/response-patterns.md).
- For Alert, Mermaid, math, YAML, list continuation, or before-and-after table details, read [Formatting details and examples](references/formatting-examples.md).

Before delivery, check the text against the requested output and the source.
Keep that review internal unless the user asks for it.
