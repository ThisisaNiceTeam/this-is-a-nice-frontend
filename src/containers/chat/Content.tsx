'use client';

import styled from '@emotion/styled';

import Sidebar from '@/components/sidebar/Sidebar';

const ChatContentWrapper = styled.div`
  background-color: var(--bg-primary);
  height: 100%;
  display: flex;
`;

const ChatMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ChatContent = () => {
  return (
    <ChatContentWrapper>
      <Sidebar />
      <ChatMainWrapper>
        <div>채팅아이템1</div>
        <div>채팅아이템2</div>
        <div>채팅아이템3</div>
        <div>채팅아이템4</div>
      </ChatMainWrapper>
    </ChatContentWrapper>
  );
};

export default ChatContent;
