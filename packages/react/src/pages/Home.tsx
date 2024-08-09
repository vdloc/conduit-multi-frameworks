import ArticleList from '@/components/Feature/Article/ArticleList';
import TagPane from '@/components/Feature/Tag/TagPane';
import HeroSection from '@/components/Hero';
import Container from '@/components/Layout/Container';
import TabList from '@/components/TabList';
import useGlobalArticles from '@/hooks/articles/useGlobalArticles';

export default function Home() {
  const { status, data, error, isFetching } = useGlobalArticles({});

  const tabs = [{ name: 'Global', href: '/', current: true }];

  return (
    <>
      <HeroSection
        title='Conduit'
        description='A place to share your knowledge.'
      />
      <Container>
        <div className='grid grid-flow-col gap-16 grid-cols-12'>
          <section className='col-span-8'>
            <TabList tabs={tabs}></TabList>
            <ArticleList articles={data?.articles || []}></ArticleList>
          </section>
          <section className='col-span-4'>
            <TagPane />
          </section>
        </div>
      </Container>
    </>
  );
}
