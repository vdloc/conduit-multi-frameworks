import NavBarItem, { type NavbarItemProps } from './NavBarItem';

type NavbarProps = {
  items: NavbarItemProps[];
};

export default function NavBar({ items }: NavbarProps) {
  return (
    <nav>
      <ul className='flex gap-4 text-lg text-theme font-bold '>
        {items.map((item) => (
          <NavBarItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  );
}
