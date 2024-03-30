import {AxiosError, AxiosResponse} from 'axios';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {postMyPetApi, putMyPetApi} from './api';
import {mypetQueryKeys, mypetQueryOptions} from './queries';
import {IMutationOptions, IPet, IQueryOptions} from '@/types/common';

export const useGetMyPetDetailApi = ({id}: IQueryOptions) => {
	return useQuery({...mypetQueryOptions.detail(id as number)});
};

export const usePostMyPetApi = ({
	mutationInput,
	onError,
	onSuccess,
}: IMutationOptions<IPet>) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => postMyPetApi(mutationInput as IPet),
		onSuccess: (response: AxiosResponse) => {
			onSuccess(response);
			queryClient.invalidateQueries({
				queryKey: mypetQueryKeys.all,
			});
		},
		onError: (error: AxiosError) => {
			onError(error);
		},
	});
};

export const usePutMyPetApi = ({
	accountId,
	id,
	mutationInput,
	onError,
	onSuccess,
}: IMutationOptions<IPet>) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () =>
			putMyPetApi(
				accountId as number,
				id as number,
				mutationInput as IPet,
			),
		onSuccess: (response: AxiosResponse) => {
			onSuccess(response);
			queryClient.invalidateQueries({
				queryKey: mypetQueryKeys.detail(id as number),
			});
			queryClient.invalidateQueries({
				queryKey: mypetQueryKeys.all,
			});
		},
		onError: (error: AxiosError) => {
			onError(error);
		},
	});
};
