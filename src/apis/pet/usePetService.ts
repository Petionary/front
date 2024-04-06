import {AxiosError, AxiosResponse} from 'axios';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {postPetApi, putPetApi} from './api';
import {petQueryKeys, petQueryOptions} from './queries';
import {IMutationOptions, IPet, IQueryOptions} from '@/types/common';

export const useGetPetDetailApi = ({id}: IQueryOptions) => {
	return useQuery({...petQueryOptions.detail(id as number)});
};

export const usePostPetApi = ({onError, onSuccess}: IMutationOptions) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: postPetApi,
		onSuccess: (response: AxiosResponse) => {
			onSuccess(response);
			queryClient.invalidateQueries({
				queryKey: petQueryKeys.all,
			});
		},
		onError: (error: AxiosError) => {
			onError(error);
		},
	});
};

export const usePutPetApi = ({
	id,
	mutationInput,
	onError,
	onSuccess,
}: IMutationOptions<IPet>) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => putPetApi(id as number, mutationInput as IPet),
		onSuccess: (response: AxiosResponse) => {
			onSuccess(response);
			queryClient.invalidateQueries({
				queryKey: petQueryKeys.detail(id as number),
			});
			queryClient.invalidateQueries({
				queryKey: petQueryKeys.all,
			});
		},
		onError: (error: AxiosError) => {
			onError(error);
		},
	});
};
