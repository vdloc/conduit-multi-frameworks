import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  BookmarkSquareIcon,
  CalendarIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-gray-900' : 'text-gray-500',
              'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            )}
          >
            <span>Resources</span>
            <ChevronDownIcon
              className={classNames(
                open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500'
              )}
              aria-hidden='true'
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50'
                    >
                      <item.icon
                        className='h-6 w-6 flex-shrink-0 text-indigo-600'
                        aria-hidden='true'
                      />
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          {item.name}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className='bg-gray-50 px-5 py-5 sm:px-8 sm:py-8'>
                  <div>
                    <h3 className='text-base font-medium text-gray-500'>
                      Recent Posts
                    </h3>
                    <ul role='list' className='mt-4 space-y-4'>
                      {recentPosts.map((post) => (
                        <li key={post.id} className='truncate text-base'>
                          <a
                            href={post.href}
                            className='font-medium text-gray-900 transition duration-150 ease-in-out hover:text-gray-700'
                          >
                            {post.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='mt-5 text-sm'>
                    <a
                      href='#'
                      className='font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500'
                    >
                      View all posts
                      <span aria-hidden='true'> &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
