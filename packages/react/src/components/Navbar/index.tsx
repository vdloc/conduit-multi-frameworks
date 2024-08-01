import { Disclosure } from '@headlessui/react';
import MobileMenuButton from '@/components/Navbar/MobileMenuButton';
import Logo from '@/components/Logo';
import NavMenu from '@/components/Navbar/Menu';
import Profile from '@/components/Navbar/Profile';
import NavMobileMenu from '@/components/Navbar/MobileMenu';
import useNavMenuItems from '@/hooks/useNavMenuItems';

export default function NavBar() {
  const items = useNavMenuItems();

  return (
    <Disclosure as='nav' className='bg-white'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <MobileMenuButton isOpen={open} />
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Logo />
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <NavMenu items={items} />
                <Profile />
              </div>
            </div>
            <NavMobileMenu items={items} />
          </div>
        </>
      )}
    </Disclosure>
  );
}
