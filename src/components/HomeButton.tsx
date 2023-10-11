'use client';

import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

const Button = styled.button`
  display: flex;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const SiteName = styled.p`
  color: white;
  margin-left: 1rem;
`;

const HomeButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push('/')}>
      <Image src='/svgs/logo.svg' alt='logo' width={40} height={40} />
      <SiteName>사이트 이름</SiteName>
    </Button>
  );
};

export default HomeButton;
