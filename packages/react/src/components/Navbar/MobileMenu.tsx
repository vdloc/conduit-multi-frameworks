import { Disclosure } from '@headlessui/react';

type Props = {};

function MobileMenu({}: Props) {
  return (
    <Disclosure.Panel className='sm:hidden'>
      <div className='space-y-1 pt-2 pb-4'>
        {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
        <Disclosure.Button
          as='a'
          href='#'
          className='block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
        >
          Dashboard
        </Disclosure.Button>
        <Disclosure.Button
          as='a'
          href='#'
          className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
        >
          Team
        </Disclosure.Button>
        <Disclosure.Button
          as='a'
          href='#'
          className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
        >
          Projects
        </Disclosure.Button>
        <Disclosure.Button
          as='a'
          href='#'
          className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
        >
          Calendar
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
}

export default MobileMenu;
