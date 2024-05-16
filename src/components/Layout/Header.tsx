import Logo from '@/components/Logo';
import NavBar from '@/components/Navbar';

export default function AppHeader() {
  return (
    <header className='shadow-md self-start'>
      <div className='container flex items-center justify-between mx-auto min-h-16'>
        <Logo />
        <NavBar
          items={[
            { label: 'Home', link: '/' },
            { label: 'Sign in', link: '/signin' },
            { label: 'Sign up', link: '/signup' },
          ]}
        />
      </div>
    </header>
  );
}
