'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Kakao = () => {
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code'); // 인가 코드가 저장되는 변수

  const loginHandler = async (code: string | string[]) => {
    await fetch(`/api/oauth?code=${code}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // console.log('data returned from api: ', res); // 데이터 잘 받아오는지 확인용 로그
  };

  // 인가 코드가 저장될 수 있도록 하는 useEffect 훅
  useEffect(() => {
    if (authCode) {
      // 인가 코드가 있을 때만 POST 요청을 보낸다.
      loginHandler(authCode);
    }
  }, [authCode]); // 의존성으로 인가 코드가 저장되는 변수를 사용한다.

  return <div>page</div>;
};
export default Kakao;
