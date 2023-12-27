'use client';

import styled from '@emotion/styled';

import HomeButton from '@/components/HomeButton';
import ThemedButton from '@/components/ThemedButton';
import Login from '@/components/login/login';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: var(--bg-home);
  color: var(--text-primary);
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const HeaderContent = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  max-width: 1600px;
  z-index: 10;
`;

const RightElement = styled.div`
  font-size: 0.938rem;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HomeButton />
        <RightElement>
          <Login />
          <ThemedButton />
        </RightElement>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
