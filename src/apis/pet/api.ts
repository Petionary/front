import {IPet} from '@/types/common';
import axiosInstance from '..';

/**************************************************
 * 반려동물 상세 정보 조회 api
 * parameter : petId
 * return : Promise<any>
 **************************************************/

export const getPetDetailApi = async (petId: number) => {
	const response = await axiosInstance.get(`mypet/${petId}`);
	return response;
};

/**************************************************
 * 반려동물 추가 api
 * parameter : mypetCreateRequest (새로운 반려동물 정보)
 * return : Promise<any>
 **************************************************/

export const postPetApi = async (mypetCreateRequest: IPet) => {
	const response = await axiosInstance.post('mypet', mypetCreateRequest);
	return response;
};

/**************************************************
 * 반려동물 정보 수정 api
 * parameter : petId, mypetCreateRequest (새로운 반려동물 정보)
 * return : Promise<any>
 **************************************************/

export const putPetApi = async (petId: number, mypetUpdateRequest: IPet) => {
	const response = await axiosInstance.put(
		`mypet/${petId}`,
		mypetUpdateRequest,
	);
	return response;
};
