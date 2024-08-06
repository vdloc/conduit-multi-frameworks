import api from '@/services/api';
import { MultipleArticlesResponse } from '@/types/Articles';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

type Props = {};

export default function useGlobalArticles({}: Props): UseQueryResult<MultipleArticlesResponse> {
  return useQuery({
    queryKey: ['globalArticles'],
    queryFn: async () => {
      return await api.article.listArticles();
    },
  });
}
