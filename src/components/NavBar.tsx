export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/signup'>Sign Up</a>
        </li>
        <li>
          <a href='/signin'>Sign In</a>
        </li>
      </ul>
    </nav>
  );
}
