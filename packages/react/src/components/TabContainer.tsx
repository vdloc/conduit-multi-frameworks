import ArticleList from '@/components/ArticleList';
import { Article } from '@customTypes/Article';
type Props = {
  articles: Article[];
};

export default function TabContainer({ articles }: Props) {
  return <ArticleList></ArticleList>;
}
