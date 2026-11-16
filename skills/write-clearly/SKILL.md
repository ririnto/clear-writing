---
name: write-clearly
description: "Write and revise clear, relevant responses with readable Markdown. Apply when drafting explanations, recommendations, documents, progress updates, completion reports, or agent handoffs, and when reviewing prose for clarity, structure, or unnecessary filler. Preserve the requested language, factual scope, and output format."
---

# Clear Writing

Give readers what they need to understand, assess, or use the result.
Apply the requested purpose, language, length, tone, and format.

## Keep the current request central

> [!IMPORTANT]
>
> Include only information that changes the reader's understanding, decision, or next action for the current request.
>
> Do not introduce unrelated context or memories through word associations, or list irrelevant exclusions, alternatives, or work not performed.

Judge relevance by the request's purpose, subject, scope, and constraints.
Use previous conversations and memory only when they concretely change the current answer or action.

Remove generic disclaimers, repeated explanations, and narration of drafting, editing, or review.
Remove defensive qualifications that restate a heading or context, such as saying a verification plan is not an execution result.
Use headings and accurate verbs to distinguish plans from results.
Keep such language only where required by purpose, such as LICENSE notices, required disclosures, or requested explanations of the writing process.

Retain concrete risks, limitations, uncertainty, and unperformed checks that affect the reader's decision.

## Preserve meaning while editing

When changing a rule, revise or remove it at its source rather than adding an opposite rule.

Preserve factual scope, uncertainty, conditions, exceptions, responsibility, and requirement strength.
Retain exact values, units, identifiers, links, and code when changing them would alter the result.
Shorter wording must not strengthen a claim.

Keep modifiers needed for uncertainty, frequency, scope, or magnitude.

Use complete sentences when an explanation needs an explicit subject or causal connection.
Use concise phrases or assertions for headings, status labels, table cells, brief answers, and parallel items when clear.
Match grammar and detail within each list and table column.

Use familiar, concrete language.
Introduce technical terms when they improve precision and explain unfamiliar meanings on first use.
Use no em dash character (`U+2014`) in authored prose.
Choose a period, comma, colon, or parentheses to match the relationship.
Omit quotation marks around ordinary labels and example requests distinguished by formatting.
Keep quotation marks required by code syntax, exact quotations, or legal text.
Keep proper names, acronyms, and code identifiers when changing heading capitalization.
Keep required notices and exact quoted text unchanged.

## Make evidence and status traceable

Distinguish facts, interpretations, proposals, and assumptions in context.
Place evidence and assumptions near qualified claims.
Link external facts and specific figures to directly supporting sources.
For current information, state the check date and scope.

Compare matching inputs, environments, units, and measurement criteria.
State what follows from the evidence and its conditions.

Distinguish written, executed, verified, deployed, and published by the actual record.
Report checks performed and remaining issues that affect use.
Include procedures when they matter for review or reproduction.

For progress updates, state the new finding, its effect, and what the next check will resolve.
For handoffs, include current state, decisions constraining remaining work, relevant paths or records, next action, and blockers.

## Choose the structure

Answer the immediate question first in conversation.
For a document, choose the sequence that fits its purpose and the reader's task instead of repeating a conversational answer-first pattern in each section.
Omit opening summaries, section recaps, or closing restatements that only duplicate nearby content.

When splitting a document, keep essential conclusions, requirements, decisions, and material conditions in the main document so it stands alone.
Link supporting documents for detailed evidence, examples, procedures, and extended explanations.
Keep each detail in one location and link to it instead of copying between documents.
Repeat only context needed to understand each supporting document alone.
Do not move essential qualifications out of the main document merely to shorten it.

| Information | Form |
| --- | --- |
| Explanation, reasoning, context | Connected paragraphs |
| Section title | Markdown heading |
| Ordered steps | Ordered list, ol, using `1.`, `2.` |
| Parallel options, status, required items | Unordered list, ul, using `-` |
| Exact mapping or comparison | Compact Markdown table |
| Essential condition or caution | GitHub Alert |
| Dependencies, branching, topology, sequence | Mermaid diagram |
| Explicit comparisons, calculations, logic, inclusion, priority | LaTeX |

Use headings that identify content and follow its hierarchy.
Do not substitute standalone bold paragraphs for headings.
Reserve bold for emphasis within prose or items.

Give each paragraph one idea and connect reasons and consequences.
Use a list or table for enumerated items instead of embedding them in prose.
Use ordered lists for steps, unordered lists for parallel items, and tables for comparisons across shared criteria.
Make list hierarchy explicit.
In comparison tables, use rows for subjects and columns for shared criteria.
State units and place extended interpretation beside tables.
Align source passages with revisions in before-and-after tables; see the formatting reference for continuation rows and deletions.

## Write for the rendered result

Write one prose sentence per Markdown source line.
Do not join sentences with semicolons or reflow them to a fixed column width.
Separate intended paragraphs with one blank line (two newline characters).
A single source newline may remain within a rendered paragraph.

Put blank lines around headings, tables, fenced blocks, and list boundaries.
Follow the formatting reference for list continuation and spacing.
Use normal word spacing and consistent indentation.
Keep table rows and code syntax valid.

When required, use a supported method to check paragraph separation, Alert spacing, heading hierarchy, list indentation, table width, graph labels, and math in rendered output.
Check links to sections in long documents.
Run repository Markdown formatting checks without changing unrelated files.
Keep text readable on narrow screens and split dense tables or diagrams by meaning when needed.

## Finish with a focused review

1. Check that structure fits medium and purpose, the main document contains essential information, and each section adds something distinct.
2. Check claims, evidence, assumptions, units, and completion status for agreement.
3. Remove generic disclaimers, repetition, writing-process narration, empty announcements, and em dashes, subject to the purpose-based exceptions above.
4. Check semantic headings, ol and ul, Alert spacing, Mermaid, and LaTeX.

Keep review internal unless requested as a deliverable.
End after communicating necessary results, evidence, and conditions.

## Read details when needed

The core rules above apply without references; load conditional details as directed.
Read only the reference needed:

- [Agent instructions](references/agent-instructions.md): when drafting or changing prompts, skills, or other agent-facing instructions.
- [Response examples](references/response-patterns.md): when drafting a completion report or recommendation.
- [Formatting details and examples](references/formatting-examples.md): when using GitHub Alerts, Mermaid, or LaTeX, when editing YAML, lists, or before-and-after tables, or when paragraph or scope-preserving editing examples are needed.
