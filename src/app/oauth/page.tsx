'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

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
      .catch((error) => alert(error))
      .then((data) => {
        const refreshToken = data['naver-refresh-token'];
        const accessToken = data['naver-access-token'];
        if (refreshToken) {
          window.location.href = `/`;
        }
        if (accessToken) {
          window.location.href = `/signup`;
        } else {
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

  return <div>로그인 처리 중</div>;
};
export default OAuth;
