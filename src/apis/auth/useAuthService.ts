import {useQuery} from '@tanstack/react-query';
import {getLoginControllerApi} from './api';
import {IQueryOptions, TSocialLogin} from '@/types/common';

/**************************************************
 * 로그인 service
 * parameter : social (로그인 종류), code (oauth token)
 * return : {data, refetch, isError, error, isLoading, ...}
 **************************************************/

export const useGetLoginController = (
	social: TSocialLogin,
	code: string | null,
	options: IQueryOptions,
) => {
	return useQuery({
		queryKey: ['auth'],
		queryFn: () => getLoginControllerApi(social, code),
		...options,
	});
};
