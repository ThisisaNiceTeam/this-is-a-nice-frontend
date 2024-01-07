'use client';

import styled from '@emotion/styled';
import { FormEvent } from 'react';
import { useRecoilState } from 'recoil';

import { User, userState } from '@/types/user';

const Signup = () => {
  const [user, setUser] = useRecoilState(userState);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (formData) {
      const name = formData.get('name') as string;
      const region = formData.get('region') as string;
      const classRoom = formData.get('classRoom') as string;
      const token = user.naverAccessToken as string;

      const request = JSON.stringify({
        name,
        region,
        classRoom,
        token,
        socialType: 'NAVER',
      });

      await fetch('/auth/social-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: request,
      })
        .then((res) => {
          console.log(res);
          if (res.ok) return res.json();
          throw new Error('회원 가입 에러 발생');
        })
        .catch((error) => {
          alert(error);
          window.location.href = `/`;
        })
        .then((data) => {
          const { nickname, refreshToken, accessToken } = data;

          // refresh token이 있다면 회원가입에 성공
          if (refreshToken) {
            const signupUser: User = {
              nickname,
              refreshToken,
              accessToken,
              isMember: true,
            };
            setUser({ ...signupUser, naverAccessToken: null });
            window.location.href = `/`;
          } else {
            alert('회원가입 실패');
            window.location.href = `/`;
          }
        });
      window.location.href = `/`;
    }
  };

  const goHome = () => {
    window.location.href = `/`;
  };

  const SignupBackground = styled.div`
    height: calc(100vh);
    background-image: linear-gradient(to top, var(--bg-gradient-darker), rgba(0, 0, 0, 0.2));
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  `;

  const SignupModal = styled.div`
    height: 600px;
    width: 400px;
    margin: 0 auto;
    padding: 56px;
    background-color: var(--bg-select);
    border-radius: 30px;
  `;

  const SignupTitle = styled.div`
    text-align: center;
    font-size: 2rem;
    color: var(--text-primary);
  `;

  const TitleBar = styled.hr`
    border: 2px solid var(--text-primary);
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
  `;

  const Form = styled.form`
    //display: block;
    margin-top: 50px;
  `;

  const Label = styled.label`
    display: block;
    margin-top: 20px;
    color: var(--text-primary);
  `;

  const TextInput = styled.input`
    display: block;
    width: 288px;
    height: 48px;
    border: 1px solid var(--outline-primary);
    padding: 6px 12px;
    margin-top: 4px;
    border-radius: 10px;
    &:focus {
      outline: 3px auto var(--text-accent);
      outline-offset: 2px;
      border-color: transparent;
    }
  `;

  const TextSelect = styled.select`
    display: block;
    width: 288px;
    height: 48px;
    border: 1px solid var(--outline-primary);
    padding: 6px 12px;
    margin-top: 4px;
    border-radius: 10px;
    &:focus {
      outline: 3px auto var(--text-accent);
      outline-offset: 2px;
    }
  `;

  const ButtonDiv = styled.div`
    display: flex;
    margin-top: 40px;
  `;

  const SubmitButton = styled.button`
    display: block;
    width: 136px;
    height: 48px;
    background: var(--icon-accent);
    color: var(--text-tertiary);
    padding: 8px;
    margin-left: 24px;
    border: none;
    border-radius: 10px;
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: uppercase;
  `;

  const PreviousButton = styled(SubmitButton)`
    background: var(--bg-accent);
    color: var(--icon-accent);
    border: 1px solid var(--icon-accent);
    margin: 0;
  `;

  return (
    <SignupBackground>
      <SignupModal>
        <SignupTitle>교육생 인증</SignupTitle>
        <TitleBar />
        <Form onSubmit={onSubmit} encType='multipart/form-data'>
          <Label>
            이름
            <TextInput name='name' type='text' placeholder='실명을 입력해주세요.' />
          </Label>
          <Label>
            지역
            <TextSelect name='region'>
              <option value=''>캠퍼스 지역을 선택해주세요.</option>
              <option value='서울'>서울</option>
              <option value='대전'>대전</option>
              <option value='광주'>광주</option>
              <option value='구미'>구미</option>
              <option value='부울경'>부울경</option>
            </TextSelect>
          </Label>
          <Label>
            반
            <TextInput name='classRoom' type='number' placeholder='1학기 반의 숫자만 입력해주세요.' />
          </Label>
          <ButtonDiv>
            <PreviousButton type='button' onClick={goHome}>
              이전으로
            </PreviousButton>
            <SubmitButton type='submit'>인증하기</SubmitButton>
          </ButtonDiv>
        </Form>
      </SignupModal>
    </SignupBackground>
  );
};

export default Signup;
