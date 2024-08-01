type Props = {
  items: { name: string; path: string }[];
};

function Menu({ items }: Props) {
  return (
    <div className='hidden sm:ml-6 sm:flex sm:space-x-8 h-full mr-4'>
      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
      {items.map(({ name, path }) => (
        <a
          href={path}
          className='inline-flex items-center border-b-2 hover:border-theme px-1 pt-1 text-md font-medium text-gray-900'
        >
          {name}
        </a>
      ))}
    </div>
  );
}

export default Menu;
