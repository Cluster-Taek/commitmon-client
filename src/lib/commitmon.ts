import { ICommitmon } from '@/types/commitmon';
import { useQuery } from '@tanstack/react-query';

export interface IChangeCommitmonFormValue extends Record<string, unknown> {
  commitmon: string;
}

export interface ICommitmonsResponse {
  commitmons: ICommitmon[];
}

export const useCommitmons = () => {
  return useQuery<ICommitmonsResponse>({
    queryKey: [`/api/commitmons`],
  });
};
