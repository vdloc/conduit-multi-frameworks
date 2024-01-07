import HeroSection from '@/components/Hero';
import Container from '@/components/Layout/Container';
import MainLayout from '@/components/Layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection
        title='Conduit'
        description='A place to share your knowledge.'
      />
      <Container>Main</Container>
    </MainLayout>
  );
}
