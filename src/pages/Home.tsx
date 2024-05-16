import HeroSection from '@/components/Hero';
import Container from '@/components/Layout/Container';
import MainLayout from '@/components/Layout/MainLayout';
import { useEffect, useState } from 'react';
import api from '@/services/api';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.article.listArticles({}).then((data) => {
      console.log(data);

      setArticles(data.data.articles);
    });
  }, []);
  return (
    <MainLayout>
      <HeroSection
        title='Conduit'
        description='A place to share your knowledge.'
      />
      <Container>
        {articles.map((article) => (
          <h1>{article.title}</h1>
        ))}
      </Container>
    </MainLayout>
  );
}
