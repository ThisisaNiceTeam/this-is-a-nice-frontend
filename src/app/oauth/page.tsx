'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import styled from '@emotion/styled';
import Image from 'next/image';

const OAuth = () => {
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code'); // 인가 코드가 저장되는 변수
  const authState = searchParams.get('state');

  const loginHandler = async (code: String | String[]) => {
    const formData = new FormData();
    // @ts-ignore
    formData.append('authorizationCode', code);

    await fetch(`/auth/authorization`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('네이버 로그인 에러 발생');
      })
      .catch((error) => {
        alert(error);
        window.location.href = `/`;
      })
      .then((data) => {
        const { refreshToken, accessToken, naverAccessToken } = data;

        // 네이버 로그인 성공, 이미 회원 가입한 사용자
        if (refreshToken) {
          localStorage.setItem('refresh-token', refreshToken);
          localStorage.setItem('access-token', accessToken);
          window.location.href = `/`;
        }
        // 네이버 로그인 성공, 회원 가입이 되지 않은 사용자
        else if (naverAccessToken) {
          // 이미 토큰이 로컬 스토리지에 있을 경우, 로컬 스토리지에서 제거
          if (localStorage.getItem('naver-access-token')) {
            localStorage.removeItem('naver-access-token');
          }
          localStorage.setItem('naver-access-token', naverAccessToken);
          window.location.href = `/signup`;
        }
        // 네이버 로그인 실패
        else {
          alert('네이버 로그인 실패');
          window.location.href = `/`;
        }
      });
  };

  // 인가 코드가 저장될 수 있도록 하는 useEffect 훅
  useEffect(() => {
    if (authCode) {
      // 인가 코드가 있을 때만 POST 요청을 보낸다.
      loginHandler(authCode);
    }
  }, [authCode]); // 의존성으로 인가 코드가 저장되는 변수를 사용한다.

  const LoginProcessWrapper = styled.div`
    height: calc(100vh);
    background-image: linear-gradient(to top, var(--bg-gradient-darker), rgba(0, 0, 0, 0.2));
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  `;

  const LoginProcessModal = styled.div`
    height: 600px;
    width: 400px;
    margin: 0 auto;
    padding: 56px;
    background-color: var(--bg-select);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  const MainMessage = styled.span`
    font-size: 1.75rem;
    color: var(--icon-accent);
    margin-top: 30px;
    font-weight: 600;
  `;

  const SubMessage = styled.span`
    font-size: 1.25rem;
    color: var(--text-secondary);
  `;

  return (
    <LoginProcessWrapper>
      <LoginProcessModal>
        {localStorage.getItem('theme') === 'light' ? (
          <Image src='/svgs/loading_spinner.svg' alt='loading_spinner' width={200} height={200} />
        ) : (
          <Image src='/svgs/loading_spinner_dark.svg' alt='loading_spinner_dark' width={200} height={200} />
        )}

        <MainMessage>회원 정보 조회 중이에요.</MainMessage>
        <SubMessage>잠시만 기다려주세요.</SubMessage>
      </LoginProcessModal>
    </LoginProcessWrapper>
  );
};
export default OAuth;
