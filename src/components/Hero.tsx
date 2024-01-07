import React from 'react';

type HeroSectionProps = {
  title: string;
  description: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className='grid py-12 text-center text-white place-content-center bg-theme'>
      <h1 className='text-6xl font-bold leading-snug'>{title}</h1>
      <p className='text-2xl'>{description}</p>
    </section>
  );
};

export default HeroSection;
