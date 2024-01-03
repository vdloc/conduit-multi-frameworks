import React from 'react';
import { Layout } from 'antd';
import AppHeader from './Header';
import AppFooter from './Footer';
import Container from '@/components/Layout/Container';

const { Content, Header: LayoutHeader, Footer: LayoutFooter } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout className='w-screen min-h-screen' hasSider={false}>
      <LayoutHeader>
        <Container>
          <AppHeader />
        </Container>
      </LayoutHeader>
      <Content>{children}</Content>
      <LayoutFooter>
        <AppFooter />
      </LayoutFooter>
    </Layout>
  );
}
