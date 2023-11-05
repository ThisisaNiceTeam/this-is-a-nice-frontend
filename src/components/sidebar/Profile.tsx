'use client';

import Image from 'next/image';
import styled from '@emotion/styled';

import { Flex } from '@/components/common';

const ProfileWrapper = styled(Flex)`
  gap: 1rem;
  align-items: center;
  padding: 0 1.5rem;
  margin-bottom: 2.5rem;
`;

const ImageWrapper = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

const Welcome = styled.span`
  color: var(--text-secondary);
  font-size: 18px;
  font-weight: 600;
`;

const Name = styled.span`
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.3rem;
`;

const Profile = ({ name }: { name: string }) => {
  return (
    <ProfileWrapper>
      <ImageWrapper>
        <Image src='/images/avatar.png' alt='Profile Avatar' fill style={{ borderRadius: '50%', objectFit: 'cover' }} />
      </ImageWrapper>
      <Flex col>
        <Welcome>Welcome</Welcome>
        <Name>{name}</Name>
      </Flex>
    </ProfileWrapper>
  );
};

export default Profile;
