'use client';

import styled from '@emotion/styled';

import theme from '@/styles/theme';

const HomeElement = styled.div`
  background-color: ${theme.lightTheme.text.accent};
  height: 8000px;
`;

const HomeContent = () => {
  return <HomeElement>This is Home Content</HomeElement>;
};

export default HomeContent;
