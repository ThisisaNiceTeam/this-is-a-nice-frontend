import styled from '@emotion/styled';

const redirectUri = `http://localhost:3000/oauth`;

const Login = () => {
  const Button = styled.button`
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  `;

  const naverLoginHandler = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${redirectUri}&state=thisisnicestate`;
  };

  return <Button onClick={naverLoginHandler}>네이버 로그인</Button>;
};

export default Login;
