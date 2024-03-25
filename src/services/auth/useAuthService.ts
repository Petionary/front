import {useQuery} from '@tanstack/react-query';
import {getLoginControllerApi} from './api';
import {TSocialLogin} from '@/types/common';

/**************************************************
 * 로그인 service
 * parameter : social (로그인 종류), code (oauth token)
 * return : {data, refetch, isError, error, isLoading, ...}
 **************************************************/

export const useGetLoginController = (social: TSocialLogin, code: string) => {
	return useQuery({
		queryKey: ['auth'],
		queryFn: () => getLoginControllerApi(social, code),
	});
};
