import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const url = new URL(req.url); // url 객체 생성
  const code = url.searchParams.get('code'); // code 데이터 추출

  try {
    let result;
    await fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI}&code=${code}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        result = data;
      });
    return NextResponse.json({ data: result });
  } catch (e) {
    return NextResponse.json({ data: 'fail' });
  }
}
