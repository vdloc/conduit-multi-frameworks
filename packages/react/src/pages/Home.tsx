import HeroSection from '@/components/Hero';
import Container from '@/components/Layout/Container';
import MainLayout from '@/components/Layout/MainLayout';
import { useEffect, useState } from 'react';
import api from '@/services/api';
import TabList from '@/components/TabList';

export default function Home() {
  const [articles, setArticles] = useState([] as Article[]);

  useEffect(() => {
    api.article.listArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  const tabs = [{ name: 'Global', href: '/', current: true }];

  return (
    <MainLayout>
      <HeroSection
        title='Conduit'
        description='A place to share your knowledge.'
      />
      <Container>
        <div className='grid grid-flow-col'>
          <section className='grid-cols-8'>
            <TabList tabs={tabs}></TabList>
            <div></div>
          </section>
          <section className='grid-cols-4'></section>
        </div>
      </Container>
    </MainLayout>
  );
}
