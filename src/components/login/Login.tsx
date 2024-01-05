import styled from '@emotion/styled';
import Link from 'next/link';

const redirectUri = `http://localhost:3000/oauth`;

const Login = () => {
  const NaverLoginLink = styled(Link)`
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    margin-right: 1rem;
  `;

  return (
    <NaverLoginLink
      href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${redirectUri}&state=thisisnicestate`}
    >
      시작하기
    </NaverLoginLink>
  );
};

export default Login;
