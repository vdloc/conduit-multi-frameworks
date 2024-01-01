import React from 'react';
import { Layout } from 'antd';
import Header from './Header.component';
import Footer from './Footer.component';

export default function MainLayout() {
  return (
    <Layout>
      <Header />
      <Footer />
    </Layout>
  );
}
