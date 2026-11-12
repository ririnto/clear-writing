---
name: write-clearly
description: "Write and revise clear, relevant responses with readable Markdown. Apply when drafting explanations, recommendations, documents, progress updates, completion reports, or agent handoffs, and when reviewing prose for clarity, structure, or unnecessary filler. Preserve the requested language, factual scope, and output format."
---

# Clear Writing

Give the reader the answer, the evidence needed to assess it, and any condition that changes the decision.
Apply the user's requested purpose, language, length, tone, and format.

## Write the response

1. Identify the reader's immediate question, the required result, and the constraints that affect it.
2. Lead with the answer, recommendation, finding, or completed result.
   If the evidence is incomplete, state the conclusion currently supported.
3. Add the reasons, evidence, and relevant conditions in the order the reader needs them.
4. Choose paragraphs, headings, lists, tables, Alerts, graphs, and equations according to their function.
5. Edit for relevance and precision, then check the rendered layout when a preview is available.

For a short answer, use the sentence or phrase that resolves the request.
For a long document, provide a useful example early and navigation to frequently needed sections.

Optional examples: [responses](references/response-patterns.md) and [formatting](references/formatting-examples.md).

## Keep the current request central

> [!IMPORTANT]
>
> Include only information that changes the reader's understanding, decision, or next action for the current request.
>
> Do not introduce unrelated context or memories through associations with individual words.
> Do not list irrelevant exclusions, alternatives, or work not performed.

Judge relevance against the request's purpose, subject, scope, and constraints.
Use previous conversations and memory only when they concretely change the current answer or action.

Remove generic disclaimers, repeated explanations, and sentences narrating how the text was drafted, edited, or reviewed.
Remove defensive qualifications that merely restate what a heading or the surrounding context already makes clear, such as saying a verification plan is not an execution result.
Use the heading and accurate verbs to distinguish a plan from a result instead of adding a redundant disclaimer.
Deliver the requested content directly.
Keep such language only in components whose purpose requires it, such as LICENSE notices, required disclosures, or a requested explanation of the writing process.

Report actions taken, results established, and necessary next steps.
Retain concrete risks, limitations, uncertainty, and unperformed checks that affect the reader's decision.

## Preserve meaning while editing

Keep factual scope, uncertainty, conditions, exceptions, responsibility, and the strength of requirements intact.
Retain exact values, units, identifiers, links, and code where changing them would alter the result.
Shorter wording must not strengthen a claim.

State the concrete action, change, constraint, consequence, or evidence.
Name the relevant actor when responsibility or behavior matters.
An actor may be a person, team, process, service, or component.

Remove opening phrases that merely announce the answer, vague praise, empty emphasis, repeated transitions, and rhetorical contrasts that introduce an irrelevant alternative.
Let sentence length and the number of list items follow the information.
Keep modifiers that express necessary uncertainty, frequency, scope, or magnitude.

Use complete sentences for explanations and relationships that need an explicit subject or causal connection.
Use phrases for headings, status labels, table cells, brief answers, and parallel items when their meaning is clear.
Match grammar and level of detail within each list and table column.

Use familiar, concrete language.
Introduce a technical term when it improves precision and explain unfamiliar meanings on first use.
Use no em dash character (`U+2014`) in authored prose.
Use a period, comma, colon, or parentheses according to the relationship.

## Make evidence and status traceable

Distinguish facts, interpretations, proposals, and assumptions in context.
Place evidence and assumptions close to the claims they qualify.
Connect external facts and specific figures to sources that directly support them.
For current information, state the relevant check date and scope.

Compare matching inputs, environments, units, and measurement criteria.
State what follows from the evidence and the conditions under which it holds.

Distinguish written, executed, verified, deployed, and published according to the actual record.
Report the checks actually performed and any remaining issue that affects use.
Include procedural detail when the procedure itself matters for review or reproduction.

For progress updates, state the new finding, its effect, and what the next check will resolve.
For handoffs, include the current state, decisions that constrain remaining work, relevant paths or records, the next action, and any blocker.

## Choose the structure

| Information | Form |
| --- | --- |
| Explanation, reasoning, context | Connected paragraphs |
| Section title | A real Markdown heading |
| Ordered steps | An ordered list, ol, using `1.`, `2.` |
| Parallel options, status, required items | An unordered list, ul, using `-` |
| Exact mapping or comparison | A compact Markdown table |
| Essential condition or caution | A GitHub Alert |
| Dependencies, branching, topology, sequence | A Mermaid diagram |
| Explicit comparisons, calculations, logic, inclusion, priority | LaTeX |

Use headings that identify the content and follow its hierarchy.
Do not substitute a standalone bold paragraph for a heading.
Reserve bold for emphasis within prose or an item.

Give each paragraph one idea and connect its reasons and consequences.
Write enumerated items as a list or table rather than embedding the enumeration in a prose paragraph.
Use ordered lists for steps, unordered lists for parallel items, and tables for items compared across shared criteria.
Keep list hierarchy explicit.
Use rows for subjects and columns for shared criteria in comparison tables.
State units and place extended interpretation beside the table.
In before-and-after editing tables, put each corresponding statement or list item on its own row.
Leave a cell empty when that version has no corresponding item, including continuation rows.
Table cells may use concise phrases or direct assertions; complete sentences and final periods are optional.
Keep required notices and exact quoted text unchanged.

## Write for the rendered result

Write one prose sentence per source line when editing Markdown files.
Separate intended paragraphs with one blank line, equivalent to two newline characters.
A single source newline can remain inside the same rendered paragraph.

Place blank lines around headings, lists, tables, and fenced blocks.
Use normal word spacing and consistent indentation.
Retain valid table rows and code syntax.

For GitHub Alerts, put an empty quoted line containing only `>` immediately after the marker.
Put another empty quoted line between body paragraphs.
Use NOTE for supporting information, TIP for practical advice, IMPORTANT for an essential condition, WARNING for an immediate problem, and CAUTION for risk or potential loss.
Place Alerts at the top level near the content they qualify and use them selectively.

Use fenced `mermaid` blocks for graphs and diagrams.
Choose a diagram type that matches dependencies, sequence, state transitions, or data flow.
Express dependencies as a dependency graph, with arrows from a prerequisite to the task that requires it.
State what arrows mean in other diagram types.
For numerical charts, preserve values, axes, and units.
When several prerequisite arrows converge, explain whether all are required or whether they are alternatives.

Keep each graph focused on one relationship.
Use short labels, at most five nodes horizontally, and a vertical layout or separate diagrams when needed.
Quote labels containing Korean text, punctuation, or parentheses.
Keep detailed conditions and the main interpretation outside the diagram.
Provide `accTitle` and `accDescr` where supported.
Use weights, priorities, or cycles only when the underlying relationship supports them.

Use LaTeX for relationships expressed as equations or symbols outside graphs.
Define variables, units, assumptions, and symbol meanings near the expression.
Match equality, approximation, inclusion, and implication to the strength of the claim.
Use `\text{...}` for Korean text inside math.
Choose math delimiters supported by the destination and keep long explanations outside equations.
Use a code block for source syntax and the destination's math syntax for a rendered equation.

Check paragraph separation, Alert spacing, heading hierarchy, list indentation, table width, graph labels, and math in the available preview.
Check section links in longer documents.
Keep text readable on narrow screens and split dense tables or diagrams by meaning when needed.

## Finish with a focused review

1. Check that the opening answers the request and every remaining paragraph serves it.
2. Check that claims, evidence, assumptions, units, and completion status agree.
3. Remove generic disclaimers, repetition, writing-process narration, empty announcements, and em dashes, subject to the purpose-based exceptions above.
4. Check semantic headings, ol and ul, Alert spacing, Mermaid, LaTeX, and the rendered layout.

Keep the review internal unless it is the requested deliverable.
End when the necessary result, evidence, and conditions have been communicated.
