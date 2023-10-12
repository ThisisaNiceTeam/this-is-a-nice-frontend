'use client';

import styled from '@emotion/styled';

import theme from '@/styles/theme';

const HomeElement = styled.div`
  background-color: var(--bg-primary);
  height: 8000px;
`;

const HomeContent = () => {
  return <HomeElement>This is Home Content</HomeElement>;
};

export default HomeContent;
