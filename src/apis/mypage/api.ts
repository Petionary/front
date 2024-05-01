import {IUser} from '@/types/common';
import axiosInstance from '..';

/**************************************************
 * 회원 상세 정보 조회 api
 * parameter : id
 * return : Promise<any>
 **************************************************/

export const getMypageApi = async (id: number) => {
	const response = await axiosInstance.get(`mypage/${id}`);
	return response;
};

/**************************************************
 * 회원 상세 정보 수정 api
 * parameter : id, mypageAccountInfoRequest(수정된 회원 정보)
 * return : Promise<any>
 **************************************************/

export const putMypageApi = async (
	id: number,
	mypageAccountInfoRequest: IUser,
) => {
	const response = await axiosInstance.put(
		`/mypage/${id}`,
		mypageAccountInfoRequest,
	);
	return response;
};

/**************************************************
 * 회원 탈퇴 api
 * parameter : id
 * return : Promise<any>
 **************************************************/

export const deleteMypageApi = async (id: number) => {
	const response = await axiosInstance.delete(`mypage/${id}`);
	return response;
};
