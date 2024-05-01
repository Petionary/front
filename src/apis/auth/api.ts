import {TSocialLogin} from '@/types/common';
import axiosInstance from '..';

/**************************************************
 * 로그인 api
 * parameter : social (로그인 종류), code (oauth token)
 * return : Promise<any>
 **************************************************/

export const getLoginControllerApi = async (
	social: TSocialLogin,
	code: string | null,
) => {
	const response = await axiosInstance.get(`login/oauth2/${social}-login`, {
		params: {code},
	});

	return response;
};
