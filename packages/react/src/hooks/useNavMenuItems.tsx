import { useState } from 'react';

type Props = {};

const publicMenuItems = [
  { name: 'Home', path: '/' },
  { name: 'Sign in', path: '/login' },
  { name: 'Sign up', path: '/register' },
];

const privateMenuItems = [
  { name: 'Home', path: '/' },
  { name: 'New Article', path: '/editor' },
];

export default function useNavMenuItems() {
  const [isAuthenticated] = useState(false);

  return isAuthenticated ? privateMenuItems : publicMenuItems;
}
