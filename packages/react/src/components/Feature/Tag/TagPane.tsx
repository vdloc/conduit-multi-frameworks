import usePopularTags from '@/hooks/tags/usePopularTags';

export default function TagPane() {
  const { data } = usePopularTags();
  const tags = data?.tags || [];

  return (
    <aside className='pt-4 grid gap-4'>
      <header className='text-center'>
        <h5 className='text-md font-medium'>Popular Tags</h5>
      </header>
      <div className='border-2 border-dashed border-gray-400 p-4 '>
        <ul className='flex flex-wrap gap-2 '>
          {tags.map((tag) => (
            <li className='rounded-2xl bg-slate-400 hover:bg-slate-500 px-2 text-sm transition-colors'>
              <a href=''>{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
