'use client';

import styled from '@emotion/styled';

const HomeElement = styled.div`
  background-color: var(--bg-home);
  padding-top: 60px;
  height: 8000px;
`;

const TitleWrapper = styled.div`
  height: calc(100vh - 60px);
  //background-image: linear-gradient(to top, var(--bg-gradient));
  background-image: linear-gradient(to top, var(--bg-gradient), transparent);
`;

const Title = styled.div`
  padding-top: 7rem;
  text-align: center;
  font-size: 4.125rem;
  font-weight: bold;
`;

const ChatWrapper = styled.div`
  width: 50vw;
  min-width: 300px;
  max-width: 800px;
  height: 18.75rem;
  margin: 3rem auto;
  text-align: center;
  font-weight: 600;
`;

const ChatOther = styled.div`
  width: fit-content;
  margin: 1rem;
  padding: 0.625rem 1.2rem;
  background-color: var(--bg-home);
  color: var(--text-primary);
  font-size: 2.5rem;
  border: 0.05rem solid var(--outline-primary);
  border-radius: 2rem;
`;

const ChatMine = styled.div`
  width: fit-content;
  margin: 1rem 1rem 1rem auto;
  padding: 0.625rem 1.2rem;
  background-color: var(--text-accent);
  color: white;
  font-size: 2.5rem;
  border: 0.05rem solid var(--outline-primary);
  border-radius: 2rem;
`;

const ChatAlert = styled.div`
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 1.5rem;
`;

const StartButton = styled.button`
  padding: 1rem 2rem;
  background-color: #202026;
  color: white;
  border: 0.05rem solid var(--outline-primary);
  border-radius: 2rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
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
      </TitleWrapper>
    </HomeElement>
  );
};

export default HomeContent;
