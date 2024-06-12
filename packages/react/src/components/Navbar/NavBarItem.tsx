export type NavbarItemProps = {
  label: string;
  link: string;
};

export default function NavBar({ label, link }: NavbarItemProps) {
  return (
    <li>
      <a className='hover:text-black transition-colors' href={link}>
        {label}
      </a>
    </li>
  );
}
