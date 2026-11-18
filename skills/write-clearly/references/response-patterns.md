# Response examples

## Report a playback fix

The engineering notes say that a fix for segment looping passed a staging check at normal playback speed.
The production rollout is scheduled for Friday.
The release team needs the verification result and rollout status.

> The loop fix passed staging at normal playback speed.
> Production rollout is scheduled for Friday.

A customer who reported the bug needs to know when the fix will reach them.

### Korean

> 구간 반복 재생이 끝 지점에서 멈추는 문제를 수정해 금요일에 배포할 예정입니다.
> 테스트 환경에서는 기본 재생 속도로 구간 끝에 도달했을 때 시작 지점으로 돌아가 재생이 이어지는 것을 확인했습니다.

### English

> We plan to release a fix on Friday for playback stopping at the end of a loop.
> In testing at normal speed, playback returned to the start of the loop and continued.

## Recommendation supported by a comparison

The team tested both options on the same hardware and input with 16 concurrent requests.

Choose Option B for this workload.
It meets both limits.

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

Measure both again under matching conditions if the input or concurrency changes.
