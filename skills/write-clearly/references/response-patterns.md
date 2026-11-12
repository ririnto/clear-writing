# Response examples

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
