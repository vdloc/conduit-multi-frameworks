import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';

type Props = {};

export default function useGlobalArticles({}: Props) {
  return useQuery({
    queryKey: ['globalArticles'],
    queryFn: async () => {
      return await api.article.listArticles();
    },
  });
}
