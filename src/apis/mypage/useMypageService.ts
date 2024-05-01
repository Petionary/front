import {AxiosError, AxiosResponse} from 'axios';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {IMutationOptions, IQueryOptions, IUser} from '@/types/common';
import {mypageQueryKeys, mypageQueryOptions} from './queries';
import {deleteMypageApi, putMypageApi} from './api';

export const useGetMypageApi = ({id}: IQueryOptions) => {
	return useQuery(mypageQueryOptions.detail(id as number));
};

export const usePutMypageApi = ({
	id,
	mutationInput,
	onError,
	onSuccess,
}: IMutationOptions<IUser>) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => putMypageApi(id as number, mutationInput as IUser),
		onSuccess: (response: AxiosResponse) => {
			onSuccess(response);
			queryClient.invalidateQueries({
				queryKey: mypageQueryKeys.detail,
			});
		},
		onError: (error: AxiosError) => {
			onError(error);
		},
	});
};

export const useDeleteMypageApi = ({
	id,
	onSuccess,
	onError,
}: IMutationOptions) => {
	return useMutation({
		mutationFn: () => deleteMypageApi(id as number),
		onSuccess,
		onError,
	});
};
