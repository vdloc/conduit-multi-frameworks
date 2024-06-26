/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const header = {
  solutions: [
    {
      name: 'Analytics',
      description:
        'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'Security',
      description: "Your customers' data will be safe and secure.",
      href: '#',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Integrations',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
      icon: Squares2X2Icon,
    },
    {
      name: 'Automations',
      description:
        'Build strategic funnels that will drive your customers to convert',
      href: '#',
      icon: ArrowPathIcon,
    },
  ],
  callsToAction: [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ],
  resources: [
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
  ],
  recentPosts: [
    { name: 'Boost your conversion rate', href: '#' },
    {
      name: 'How to use search engine optimization to drive traffic to your site',
      href: '#',
    },
    { name: 'Improve your customer experience', href: '#' },
  ],
};
const pricing = {
  tiers: [
    {
      title: 'Freelancer',
      price: 24,
      frequency: '/month',
      description: 'The essentials to provide your best work for clients.',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'Startup',
      price: 32,
      frequency: '/month',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
      cta: 'Monthly billing',
      mostPopular: true,
    },
    {
      title: 'Enterprise',
      price: 48,
      frequency: '/month',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
  ],
};
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
const footer = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props: any) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className='bg-white'>
      {/* Header and Page Header */}
      <div className='relative'>
        {/* Header */}
        <Popover as='header' className='relative z-10'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='flex items-center justify-between border-b border-gray-200 py-6 md:justify-start md:space-x-10'>
              <div className='flex justify-start lg:w-0 lg:flex-1'>
                <a href='#'>
                  <span className='sr-only'>Your Company</span>
                  <img
                    className='h-8 w-auto sm:h-10'
                    src='https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500'
                    alt=''
                  />
                </a>
              </div>
              <div className='-my-2 -mr-2 md:hidden'>
                <Popover.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500'>
                  <span className='sr-only'>Open menu</span>
                  <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
              <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2'
                        )}
                      >
                        <span>Solutions</span>
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
                        <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                              {header.solutions.map((solution) => (
                                <a
                                  key={solution.name}
                                  href={solution.href}
                                  className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                >
                                  <solution.icon
                                    className='h-6 w-6 flex-shrink-0 text-rose-400'
                                    aria-hidden='true'
                                  />
                                  <div className='ml-4'>
                                    <p className='text-base font-medium text-gray-900'>
                                      {solution.name}
                                    </p>
                                    <p className='mt-1 text-sm text-gray-500'>
                                      {solution.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className='space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                              {header.callsToAction.map((cta) => (
                                <div key={cta.name} className='flow-root'>
                                  <a
                                    href={cta.href}
                                    className='-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100'
                                  >
                                    <cta.icon
                                      className='h-6 w-6 flex-shrink-0 text-gray-400'
                                      aria-hidden='true'
                                    />
                                    <span className='ml-3'>{cta.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a
                  href='#'
                  className='text-base font-medium text-gray-500 hover:text-gray-900'
                >
                  Pricing
                </a>
                <a
                  href='#'
                  className='text-base font-medium text-gray-500 hover:text-gray-900'
                >
                  Docs
                </a>

                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2'
                        )}
                      >
                        <span>More</span>
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
                              {header.resources.map((resource) => (
                                <a
                                  key={resource.name}
                                  href={resource.href}
                                  className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                >
                                  <resource.icon
                                    className='h-6 w-6 flex-shrink-0 text-rose-400'
                                    aria-hidden='true'
                                  />
                                  <div className='ml-4'>
                                    <p className='text-base font-medium text-gray-900'>
                                      {resource.name}
                                    </p>
                                    <p className='mt-1 text-sm text-gray-500'>
                                      {resource.description}
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
                                  {header.recentPosts.map((post) => (
                                    <li
                                      key={post.name}
                                      className='truncate text-base'
                                    >
                                      <a
                                        href={post.href}
                                        className='font-medium text-gray-900 hover:text-gray-700'
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
                                  className='font-medium text-rose-600 hover:text-rose-500'
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
              </Popover.Group>
              <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
                <a
                  href='#'
                  className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
                >
                  Sign in
                </a>
                <a
                  href='#'
                  className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-600'
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
            >
              <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='px-5 pt-5 pb-6'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <img
                        className='h-8 w-auto'
                        src='https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500'
                        alt='Your Company'
                      />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500'>
                        <span className='sr-only'>Close menu</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <nav className='grid gap-y-8'>
                      {header.solutions.map((solution) => (
                        <a
                          key={solution.name}
                          href={solution.href}
                          className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                        >
                          <solution.icon
                            className='h-6 w-6 flex-shrink-0 text-rose-400'
                            aria-hidden='true'
                          />
                          <span className='ml-3 text-base font-medium text-gray-900'>
                            {solution.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className='space-y-6 py-6 px-5'>
                  <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                    <a
                      href='#'
                      className='text-base font-medium text-gray-900 hover:text-gray-700'
                    >
                      Pricing
                    </a>

                    <a
                      href='#'
                      className='text-base font-medium text-gray-900 hover:text-gray-700'
                    >
                      Docs
                    </a>
                    {header.resources.map((resource) => (
                      <a
                        key={resource.name}
                        href={resource.href}
                        className='text-base font-medium text-gray-900 hover:text-gray-700'
                      >
                        {resource.name}
                      </a>
                    ))}
                  </div>
                  <div>
                    <a
                      href='#'
                      className='flex w-full items-center justify-center rounded-md border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-600'
                    >
                      Sign up
                    </a>
                    <p className='mt-6 text-center text-base font-medium text-gray-500'>
                      Existing customer?{' '}
                      <a href='#' className='text-rose-600 hover:text-rose-500'>
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        {/* Page Header */}
        <div className='relative mx-auto max-w-2xl py-24 px-6 lg:max-w-7xl lg:py-32 lg:px-8'>
          <div className='relative'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl'>
              Pricing plans for teams of all sizes
            </h1>
            <p className='mt-6 max-w-2xl text-xl text-gray-500'>
              Choose an affordable plan that's packed with the best features for
              engaging your audience, creating customer loyalty, and driving
              sales.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Pricing Section */}
        <section className='relative' aria-labelledby='pricing-heading'>
          <h2 id='pricing-heading' className='sr-only'>
            Pricing
          </h2>

          {/* Tiers */}
          <div className='mx-auto max-w-2xl space-y-12 px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 lg:px-8'>
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className='relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm'
              >
                <div className='flex-1'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {tier.title}
                  </h3>
                  {tier.mostPopular ? (
                    <p className='absolute top-0 -translate-y-1/2 transform rounded-full bg-rose-500 py-1.5 px-4 text-sm font-semibold text-white'>
                      Most popular
                    </p>
                  ) : null}
                  <p className='mt-4 flex items-baseline text-gray-900'>
                    <span className='text-5xl font-bold tracking-tight'>
                      ${tier.price}
                    </span>
                    <span className='ml-1 text-xl font-semibold'>
                      {tier.frequency}
                    </span>
                  </p>
                  <p className='mt-6 text-gray-500'>{tier.description}</p>

                  {/* Feature list */}
                  <ul role='list' className='mt-6 space-y-6'>
                    {tier.features.map((feature) => (
                      <li key={feature} className='flex'>
                        <CheckIcon
                          className='h-6 w-6 flex-shrink-0 text-rose-500'
                          aria-hidden='true'
                        />
                        <span className='ml-3 text-gray-500'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href='#'
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-rose-500 text-white hover:bg-rose-600'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100',
                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Logo Cloud */}
        <section
          aria-labelledby='customer-heading'
          className='mx-auto max-w-2xl py-24 px-6 lg:max-w-7xl lg:py-32 lg:px-8'
        >
          <h2 id='customer-heading' className='sr-only'>
            Our customers
          </h2>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <img
                className='h-12'
                src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                alt='Tuple'
              />
            </div>
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <img
                className='h-12'
                src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
                alt='Mirage'
              />
            </div>
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <img
                className='h-12'
                src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                alt='StaticKit'
              />
            </div>
            <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <img
                className='h-12'
                src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
                alt='Transistor'
              />
            </div>
            <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
              <img
                className='h-12'
                src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                alt='Workcation'
              />
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <div className='relative'>
          {/* Decorative background */}
          <div
            aria-hidden='true'
            className='absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50'
          />

          <div className='relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
            <div className='relative overflow-hidden rounded-xl bg-rose-500 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16'>
              <div className='absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter'>
                <img
                  src='https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80'
                  alt=''
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='relative lg:col-span-1'>
                <img
                  className='h-12 w-auto'
                  src='https://tailwindui.com/img/logos/workcation-logo-white.svg'
                  alt=''
                />
                <blockquote className='mt-6 text-white'>
                  <p className='text-xl font-medium sm:text-2xl'>
                    This app has completely transformed how we interact with
                    customers. We've seen record bookings, higher customer
                    satisfaction, and reduced churn.
                  </p>
                  <footer className='mt-6'>
                    <p className='flex flex-col font-medium'>
                      <span>Marie Chilvers</span>
                      <span>CEO, Workcation</span>
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section
          aria-labelledby='faq-heading'
          className='mx-auto max-w-2xl divide-y divide-gray-200 py-24 px-6 lg:max-w-7xl lg:py-32 lg:px-8'
        >
          <h2
            id='faq-heading'
            className='text-3xl font-bold tracking-tight text-gray-900'
          >
            Frequently asked questions
          </h2>
          <div className='mt-8'>
            <dl className='divide-y divide-gray-200'>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className='pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8'
                >
                  <dt className='text-base font-medium text-gray-900 md:col-span-5'>
                    {faq.question}
                  </dt>
                  <dd className='mt-2 md:col-span-7 md:mt-0'>
                    <p className='text-base text-gray-500'>{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-gray-50' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='space-y-8 xl:col-span-1'>
              <img
                className='h-10'
                src='https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300'
                alt='Company name'
              />
              <p className='text-base text-gray-500'>
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className='flex space-x-6'>
                {footer.social.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className='text-gray-400 hover:text-gray-500'
                  >
                    <span className='sr-only'>{link.name}</span>
                    <link.icon className='h-6 w-6' aria-hidden='true' />
                  </a>
                ))}
              </div>
            </div>
            <div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-base font-medium text-gray-900'>
                    Solutions
                  </h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {footer.solutions.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className='text-base text-gray-500 hover:text-gray-900'
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-12 md:mt-0'>
                  <h3 className='text-base font-medium text-gray-900'>
                    Support
                  </h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {footer.support.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className='text-base text-gray-500 hover:text-gray-900'
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-base font-medium text-gray-900'>
                    Company
                  </h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {footer.company.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className='text-base text-gray-500 hover:text-gray-900'
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-12 md:mt-0'>
                  <h3 className='text-base font-medium text-gray-900'>Legal</h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {footer.legal.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className='text-base text-gray-500 hover:text-gray-900'
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 border-t border-gray-200 pt-8'>
            <p className='text-base text-gray-400 xl:text-center'>
              &copy; 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
