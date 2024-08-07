import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export interface MobileMenuButtonProps {
  isOpen: boolean;
}

export default function MobileMenuButton({ isOpen }: MobileMenuButtonProps) {
  return (
    <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
      <span className='sr-only'>Open main menu</span>
      {isOpen ? (
        <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
      ) : (
        <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
      )}
    </Disclosure.Button>
  );
}
