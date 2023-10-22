## Test Convention

### TDD를 원칙으로 하여 개발한다.

1. 의도한 기능에 대해 테스트 코드를 먼저 작성한다.
2. 테스트를 통과하는 최소한의 코드를 작성한다.
3. 테스트를 통과한 코드에 대해 리팩토링을 진행한다.

### 테스트 코드는 아래 수칙을 지켜 작성한다.

- 테스트 코드는 각 함수, 컴포넌트나 컨테이너 단위로 작성한다.
- 테스트 코드의 파일명은 `*.spec.ts` , `*.spec.tsx`로 하고 테스트할 대상과 같은 디렉토리에 위치한다.
- 테스트 케이스는 반드시 참(True) 혹은 거짓(False)을 반환해야 한다.
- 테스트 케이스는 간단하고 명확하게 작성한다.
- 하나의 테스트에서 두 개 이상의 명제를 검증하지 않는다.
- 테스트 코드는 쉬운 경우에서 어려운 경우로 순차적으로 작성한다.
- 과도하게 구현을 검증하지 않는다. 내부 구현보다는 실행 결과를 검증한다.
- 테스트 코드는 실행 환경·시점과 상관없이 항상 같은 결과를 가져야 한다.

### 코드 작성시 주의 사항

- event 검증시에는 userEvent를 사용한다.
- element에 접근할 때 적절한 함수를 사용한다. [Get, Find, Query 차이](https://velog.io/@onejuice98/React-Testing-library-get-find-query-%EA%B5%AC%EB%B6%84%ED%95%98%EA%B8%B0)
-

### Example

`TestButton.tsx`

```tsx
import { useState } from 'react';

const TestButton = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <button type='button' onClick={() => setState(!state)}>
      {state ? 'ON' : 'OFF'}
    </button>
  );
};

export default TestButton;
```

<br />

`TestButton.spec.tsx`

```tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TestButton from './TestButton';

describe('TestButton', () => {
  test('초기 상태는 OFF다.', async () => {
    render(<TestButton />);

    expect(await screen.findByText<HTMLButtonElement>('OFF')).toBeInTheDocument();
  });

  test('클릭하면 On & OFF가 전환된다.', async () => {
    render(<TestButton />);

    userEvent.click(await screen.findByText<HTMLButtonElement>('OFF'));

    expect(await screen.findByText<HTMLButtonElement>('ON')).toBeInTheDocument();
  });
});
```

<br />

### 참고자료

[리액트 테스트 참고 문서 저장소](https://github.com/ssi02014/React-Test-Reference-Documentation)
