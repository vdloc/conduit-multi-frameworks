import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import { Flex } from 'antd';

export default function AppHeader() {
  return (
    <Flex justify='space-between' align='center'>
      <Logo />
      <NavBar />
    </Flex>
  );
}
