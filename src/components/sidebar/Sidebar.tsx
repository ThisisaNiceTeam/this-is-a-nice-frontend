'use client';

import { useState } from 'react';
import styled from '@emotion/styled';

import { Button } from '@/components/common';
import ChatRoomButton from '@/components/sidebar/ChatRoomButton';
import SettingButton from '@/components/sidebar/SettingButton';
import Profile from '@/components/sidebar/Profile';
import FoldingSvg from '@/components/sidebar/FoldingSvg';

const dummyId = 'Asher';

const dummyData = [
  { id: 'Insuck', notiCnt: 5 },
  { id: 'hwan2da' },
  { id: 'dasolkang' },
  { id: 'parkyolo', notiCnt: 2 },
];

const SidebarWrapper = styled.aside<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isOpen ? '33%' : 0)};
  min-width: 22rem;
  max-width: 28.5rem;
  height: 100%;
  background-color: ${(props) => (props.isOpen ? 'var(--bg-secondary)' : 'transparent')};
  padding: ${(props) => (props.isOpen ? '4.5rem 2.5rem 4rem 2.5rem' : '10px')};
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  justify-content: space-between;
`;

const FoldingButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  width: 72px;
  top: 8%;
  right: ${(props) => props.isOpen && '-8%'};
  left: ${(props) => !props.isOpen && '-8%'};
  cursor: pointer;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
`;

const NewChatButton = styled(Button)`
  width: 100%;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarWrapper isOpen={isOpen}>
      <FoldingButton
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FoldingSvg />
      </FoldingButton>
      {isOpen && (
        <>
          <TopContainer>
            <Profile name={dummyId} />
            {dummyData.map((chatroom) => (
              <ChatRoomButton key={`chatroom_${chatroom.id}`} id={chatroom.id} notiCnt={chatroom.notiCnt} />
            ))}
          </TopContainer>
          <ButtonContainer>
            <NewChatButton>+ New Chat</NewChatButton>
            <SettingButton />
          </ButtonContainer>
        </>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
