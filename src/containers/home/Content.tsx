'use client';

import styled from '@emotion/styled';
import { ExpandMore } from '@emotion-icons/material';

const HomeElement = styled.div`
  background-color: var(--bg-home);
  padding-top: 60px;
  height: 8000px;
`;

const TitleWrapper = styled.div`
  height: calc(100vh - 60px);
  background-image: linear-gradient(to top, var(--bg-gradient), transparent);
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
  padding-top: 10vh;
  text-align: center;
  font-size: 2rem;
  @media (min-width: 600px) {
    font-size: 4.125rem;
  }
  font-weight: bold;
`;

const ChatWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 25vh;
  margin: 3rem auto;
  text-align: center;
  font-weight: 600;
  min-width: 200px;
  @media (min-width: 600px) {
    max-width: 600px;
    min-width: 400px;
  }
`;

const Chat = styled.div`
  width: fit-content;
  margin: 1rem;
  border: 0.05rem solid var(--outline-primary);
  border-radius: 2rem;
  font-size: 1.25rem;
  padding: 0.3rem 0.6rem;
  @media (min-width: 600px) {
    font-size: 2.5rem;
    padding: 0.625rem 1.2rem;
  }
`;
const ChatOther = styled(Chat)`
  background-color: var(--bg-home);
  color: var(--text-primary);
  border: 0.05rem solid var(--outline-primary);
  border-radius: 2rem;
`;
const ChatMine = styled(Chat)`
  margin: 1rem 1rem 1rem auto;
  background-color: var(--text-accent);
  color: white;
`;

const ChatAlert = styled.div`
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 0.75rem;
  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  display: flex;
  width: fit-content;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  align-items: center;
`;

const StartButton = styled(Button)`
  padding: 0.5rem 1rem;
  margin: 0 auto 1rem;
  background-color: #202026;
  color: white;
  border: 0.05rem solid var(--outline-primary);
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: bold;

  @media (min-width: 600px) {
    padding: 1rem 2rem;
    font-size: 2rem;
  }
`;

const MoreButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const HomeContent = () => {
  return (
    <HomeElement>
      <TitleWrapper>
        <Title>
          하나둘셋넷다섯
          <br />
          여섯일곱여덟아홉열
        </Title>
        <ChatWrapper>
          <ChatOther>ㅎㅇ</ChatOther>
          <ChatOther>ㅇㅊ?</ChatOther>
          <ChatMine>ㄴㅇㅊ</ChatMine>
          <ChatAlert>상대가 나갔습니다.</ChatAlert>
          <StartButton>시작하기</StartButton>
        </ChatWrapper>

        <MoreButton>
          <ExpandMore width={50} />
        </MoreButton>
      </TitleWrapper>
    </HomeElement>
  );
};

export default HomeContent;
