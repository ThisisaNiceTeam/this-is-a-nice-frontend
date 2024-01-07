import styled from '@emotion/styled';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

import { userState } from '@/types/user';

const redirectUri = process.env.NEXT_PUBLIC_NAVER_LOGIN_REDIRECT_URI;

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useRecoilState(userState);

  const logoutClicked = () => {
    setUser({ ...user, isMember: false });
    setIsLogin(false);
  };

  const LoginCheckLink = styled(Link)`
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    margin-right: 1rem;
  `;

  useEffect(() => {
    if (user.isMember) setIsLogin(true);
    if (!user.isMember) setIsLogin(false);
  }, [user]);

  return (
    <div>
      {isLogin ? (
        <LoginCheckLink href='/' onClick={logoutClicked}>
          로그아웃
        </LoginCheckLink>
      ) : (
        <LoginCheckLink
          href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${redirectUri}&state=thisisnicestate`}
        >
          시작하기
        </LoginCheckLink>
      )}
    </div>
  );
};

export default Login;
