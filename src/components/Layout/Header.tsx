import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';

export default function AppHeader() {
  return (
    <header className='shadow-md self-start'>
      <div className='container flex items-center justify-between mx-auto min-h-16'>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}
