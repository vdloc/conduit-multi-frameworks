import ArticleList from '@/components/ArticleList';
import HeroSection from '@/components/Hero';
import Container from '@/components/Layout/Container';
import MainLayout from '@/components/Layout/MainLayout';
import TabContainer from '@/components/TabContainer';
import TabList from '@/components/TabList';
import useGlobalArticles from '@/hooks/articles/useGlobalArticles';

export default function Home() {
  const { status, data, error, isFetching } = useGlobalArticles({});

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
            <ArticleList articles={data?.articles || []}></ArticleList>
          </section>
          <section className='grid-cols-4'></section>
        </div>
      </Container>
    </MainLayout>
  );
}
