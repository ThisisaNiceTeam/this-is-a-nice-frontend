import { Inter } from 'next/font/google'; // 원하는 폰트 가져와서 사용하기

import Content from '@/containers/home/Content';

import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={inter.className}>
      <Header />
      <Content />
    </main>
  );
};

export default Home;
