import { Article } from '@/types/Article';

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <div>
      <div className='mt-6 flow-root'>
        <ul role='list' className='-my-5 divide-y divide-gray-200'>
          {articles.map(
            ({ slug, title, description, createdAt, author }: Article) => (
              <li key={slug} className='py-4 space-y-4'>
                <header className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <img
                      className='h-8 w-8 rounded-full'
                      src={author.image}
                      alt=''
                    />
                    <div>
                      <p className='truncate text-sm font-medium text-gray-900'>
                        {author.username}
                      </p>
                      <span className='text-xs font-medium text-gray-900'>
                        {createdAt}
                      </span>
                    </div>
                  </div>
                </header>
                <section>
                  <h5 className='text-lg font-semibold '>{title}</h5>
                  <p className='text-sm truncate max-w-96'>{description}</p>
                </section>
                <section className='flex'>
                  
                </section>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
