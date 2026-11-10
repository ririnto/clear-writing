# Response Patterns

Choose the pattern that fits the request and include the parts needed to resolve it.
Adapt the language and level of detail to the reader.

## Navigation

- [Select a pattern](#select-a-pattern)
- [Completion report](#completion-report)
- [Recommendation supported by a comparison](#recommendation-supported-by-a-comparison)
- [Progress and handoff](#progress-and-handoff)
- [Edit without changing scope](#edit-without-changing-scope)

## Select a pattern

| Request | Lead with | Follow with |
| --- | --- | --- |
| Question | Answer or supported conclusion | Reasons and necessary conditions |
| Recommendation | Choice and criteria | Comparable evidence and conditions that change the choice |
| Investigation | Main finding | Evidence, interpretation, uncertainty |
| Work result | Changed behavior or deliverable | Reason, actual checks, remaining issues |
| Progress update | New finding | Its effect and the purpose of the next check |
| Handoff | Current state and next task | Decisions, relevant locations, records |

## Completion report

### Korean example

> 구간 끝에서 멈추던 반복 재생을 수정했습니다.
> 종료 지점에 도달하면 시작 위치로 이동해 재생을 이어갑니다.
>
> - 일반 재생: 정상 동작 확인
> - 구간 반복: 종료 지점에서 재시작 확인
>
> 배속 변경과 함께 사용할 때의 동작은 추가 확인이 필요합니다.

### English example

> Fixed playback stopping at the end of a looped segment.
> Playback now returns to the start and continues.
>
> - Normal playback: verified
> - Segment looping: restart at the end verified
>
> Playback speed changes combined with looping still need verification.

## Recommendation supported by a comparison

Example inputs: the same hardware and input with 16 concurrent requests.

Recommend Option B under these conditions.
It satisfies both limits:

$$
L_{95}\le 70\,\mathrm{ms}
\quad\land\quad
M\le 256\,\mathrm{MiB}
$$

$L_{95}$ is the 95th percentile of request latency.
$M$ is peak memory use.

| Option | p95 (ms) | Peak memory (MiB) |
| --- | ---: | ---: |
| A | 84 | 96 |
| B | 57 | 180 |

Option A exceeds the latency limit.
Option B meets both limits.
Measure both again under matching conditions if the input or concurrency changes.

## Progress and handoff

For progress, state what the latest check established and how it changes the work.
Name the next check and the uncertainty it will resolve.

For a handoff, give the receiving agent enough context to continue:

- Current result and completion state
- Decisions that constrain the remaining work
- Relevant paths, artifacts, or records
- Next action and any actual blocker

## Edit without changing scope

| Draft | Revision |
| --- | --- |
| It is important to note that the cache expires after 60 seconds. | The cache expires after 60 seconds. |
| This is for informational purposes only. The cache expires after 60 seconds. | The cache expires after 60 seconds. |
| The cache expires after 60 seconds. That means it lasts one minute. | The cache expires after 60 seconds. |
| I shortened the sentences and reviewed the wording. The cache expires after 60 seconds. | The cache expires after 60 seconds. |
| Some requests may fail during a restart. | Some requests may fail during a restart. |
| LICENSE notice: THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. | LICENSE notice: THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. |
| This is a major improvement in how errors are handled: the parser now reports the input offset. | The parser now reports the input offset. |
