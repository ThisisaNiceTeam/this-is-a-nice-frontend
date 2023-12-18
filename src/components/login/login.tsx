import { useEffect } from 'react';
import styled from '@emotion/styled';

const redirectUri = `http://localhost:3000/oauth`;
const scope = ['profile_nickname'].join(',');

const Login = () => {
  useEffect(() => {
    const kakaoSDK = document.createElement('script');
    kakaoSDK.async = false;
    kakaoSDK.src = `https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js`;
    kakaoSDK.integrity = `sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8`;
    kakaoSDK.crossOrigin = `anonymous`;
    document.head.appendChild(kakaoSDK);

    const onLoadKakaoAPI = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        console.log('after Init: ', window.Kakao.isInitialized());
      }
    };

    kakaoSDK.addEventListener('load', onLoadKakaoAPI);
  }, []);

  const Button = styled.button`
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  `;

  const kakaoLoginHandler = () => {
    // 인가 코드 받기 위해서, 리다이렉트 페이지로 이동
    window.Kakao.Auth.authorize({
      redirectUri,
      scope,
    });
    console.log('Kakao Logining'); // 확인용 로그
  };

  return <Button onClick={kakaoLoginHandler}>카카오 로그인</Button>;
};

export default Login;
