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
