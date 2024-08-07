import api from '@/services/api';
import { TagsResponse } from '@/types/Tags';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export default function usePopularTags(): UseQueryResult<TagsResponse> {
  return useQuery({
    queryKey: ['popularTags'],
    queryFn: async () => {
      return await api.tag.getTags();
    },
  });
}
