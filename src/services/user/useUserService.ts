import {AxiosError, AxiosResponse} from 'axios';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {IMutationOptions, IQueryOptions, IUser} from '@/types/common';
import {userQueryKeys, userQueryOptions} from './queries';
import {deleteUserApi, putUserDetailApi} from './api';

export const useGetUserDetialApi = ({id}: IQueryOptions) => {
	return useQuery(userQueryOptions.detail(id as number));
};

export const usePutUserApi = ({
	id,
	mutationInput,
	onError,
	onSuccess,
}: IMutationOptions<IUser>) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () =>
			putUserDetailApi(id as number, mutationInput as IUser),
		onSuccess: (response: AxiosResponse) => {
			onSuccess(response);
			queryClient.invalidateQueries({
				queryKey: userQueryKeys.detail,
			});
		},
		onError: (error: AxiosError) => {
			onError(error);
		},
	});
};

export const useDeleteUserApi = ({
	id,
	onSuccess,
	onError,
}: IMutationOptions) => {
	return useMutation({
		mutationFn: () => deleteUserApi(id as number),
		onSuccess,
		onError,
	});
};
