'use client';

import styled from '@emotion/styled';
import { Settings } from '@emotion-icons/material-outlined';

import { Button } from '@/components/common';

const StyledButton = styled(Button)`
  padding: 0;
  min-width: 3.5rem;
  min-height: 3.5rem;
`;

const SettingButton = () => {
  return (
    <StyledButton>
      <Settings width={34} />
    </StyledButton>
  );
};

export default SettingButton;
