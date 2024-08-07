import { Article } from '@/types/Article';
import { EnvelopeIcon, HeartIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <div>
      <div className='mt-6 flow-root'>
        <ul role='list' className='-my-5 divide-y divide-gray-200'>
          {articles.map(
            ({
              slug,
              title,
              description,
              createdAt,
              author,
              tagList,
              favoritesCount,
              favorited,
            }: Article) => {
              const favoriteButtonClassName = classNames(
                'border-indigo-500 inline-flex items-center rounded-md border px-2 py-1.5 text-sm font-semibold leading-4 shadow-sm hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                favorited ? 'bg-indigo-500 text-white' : 'text-indigo-500'
              );
              return (
                <li key={slug} className='py-4 space-y-4'>
                  <header className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                      <img
                        className='h-8 w-8 rounded-full'
                        src={author.image}
                        alt=''
                      />
                      <div>
                        <a
                          href=''
                          className='block truncate text-sm font-medium text-gray-900 hover:text-indigo-500'
                        >
                          {author.username}
                        </a>
                        <span className='text-xs font-medium text-gray-900'>
                          {createdAt}
                        </span>
                      </div>
                    </div>
                    <div>
                      <button type='button' className={favoriteButtonClassName}>
                        <HeartIcon
                          className='-ml-0.5 mr-2 h-4 w-4'
                          aria-hidden='true'
                        />
                        {favoritesCount}
                      </button>
                    </div>
                  </header>
                  <section>
                    <a href='' className='block'>
                      <h5 className='text-lg font-semibold '>{title}</h5>
                      <p className='text-sm truncate max-w-96'>{description}</p>
                    </a>
                  </section>
                  <section className='flex justify-between'>
                    <a href=''>Read more</a>
                    <a href='' className='block'>
                      <ul className='flex gap-2'>
                        {tagList?.map((tag) => (
                          <li className='border border-gray-300 px-3 rounded-3xl'>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </a>
                  </section>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}
