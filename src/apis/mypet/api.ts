import {IPet} from '@/types/common';
import axiosInstance from '..';

/**************************************************
 * 반려동물 상세 정보 조회 api
 * parameter : petId
 * return : Promise<any>
 **************************************************/

export const getMyPetDetailApi = async (petId: number) => {
	const response = await axiosInstance.get(`mypet/${petId}`);
	return response;
};

/**************************************************
 * 반려동물 추가 api
 * parameter : mypetCreateRequest (새로운 반려동물 정보)
 * return : Promise<any>
 **************************************************/

export const postMyPetApi = async (mypetCreateRequest: IPet) => {
	const response = await axiosInstance.post('mypet', mypetCreateRequest);
	return response;
};

/**************************************************
 * 반려동물 정보 수정 api
 * parameter : petId, mypetCreateRequest (새로운 반려동물 정보)
 * return : Promise<any>
 **************************************************/

export const putMyPetApi = async (
	accounrId: number,
	petId: number,
	mypetUpdateRequest: IPet,
) => {
	const response = await axiosInstance.put(
		`mypet/${accounrId}/${petId}`,
		mypetUpdateRequest,
	);
	return response;
};
