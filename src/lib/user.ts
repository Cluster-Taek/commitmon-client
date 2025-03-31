import { fetchApi } from './base';
import { IUser, IUserWithFollowers } from '@/types/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export interface IChangeCommitmonFormValue extends Record<string, unknown> {
  commitmon: string;
}

export const useUser = () => {
  return useQuery<IUser>({
    queryKey: [`/api/me`],
  });
};

export const useUserWithFollowers = () => {
  return useQuery<IUserWithFollowers>({
    queryKey: [`/api/me/detail`],
  });
};

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IChangeCommitmonFormValue) => await fetchApi.post(`/api/me/commmitmon/change`, data),
    onSuccess: async () => {
      await Promise.all([
        await queryClient.invalidateQueries({
          queryKey: ['/api/me'],
          refetchType: 'all',
        }),
        await queryClient.invalidateQueries({
          queryKey: ['/api/me/detail'],
          refetchType: 'all',
        }),
      ]);
    },
  });
};
