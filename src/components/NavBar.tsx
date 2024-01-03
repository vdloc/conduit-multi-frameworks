import { Menu } from 'antd';

const items = [
  { label: 'Home', title: 'Homepage', key: 1 },
  { label: 'Sign In', title: 'Sign In', key: 2 },
  { label: 'Sign Up', title: 'Sign Up', key: 3 },
];

export default function NavBar() {
  return (
    <Menu
      theme='dark'
      mode='horizontal'
      defaultSelectedKeys={['2']}
      items={items}
    />
  );
}
