'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

import HomeButton from '@/components/HomeButton';

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.header`
  width: 100vw;
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

const SignIn = styled.span`
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HomeButton />
        <RightElement>
          <SignIn>시작하기</SignIn>
          <Image src='/svgs/themeButton.svg' alt='logo' width={20} height={20} />
        </RightElement>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
