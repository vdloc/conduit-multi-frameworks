import { Disclosure } from '@headlessui/react';

type Props = {
  items: { name: string; path: string }[];
};

function MobileMenu({ items }: Props) {
  return (
    <Disclosure.Panel className='sm:hidden'>
      <div className='space-y-1 pt-2 pb-4'>
        {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
        {items.map(({ name, path }) => (
          <Disclosure.Button
            as='a'
            href={path}
            className='block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
          >
            {name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
}

export default MobileMenu;
