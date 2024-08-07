import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='grid grid-rows-[max-content] min-h-screen transition-all duration-500'>
      <Header />
      <main className='self-start'>{children}</main>
      <Footer />
    </div>
  );
}
