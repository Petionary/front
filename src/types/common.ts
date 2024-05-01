/**************************************************
 * 공통으로 사용하는 타입
 **************************************************/

import {QueryKey} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';

export interface IUser {
	accountId: number;
	email: string;
	name: string;
	nickname: string;
	phoneNumber: string;
	image: string;
}

export interface IPet {
	petId?: number;
	createAt?: string;
	updateAt?: string;
	petName: string;
	imgUrl: string;
	petSpecies: 'DOG' | 'CAT' | 'OTHER';
	petBirth: string;
	petGender: 'MALE' | 'FEMALE';
	speciesDetail: string;
	content: string;
}

export interface IOption {
	value: string;
	label: string;
}

export interface IQueryProps<ResponseType = void> {
	queryKey: QueryKey;
	qeuryFn: () => Promise<ResponseType>;
}

export interface IMutationOptions<T = unknown> {
	id?: number;
	accountId?: number;
	mutationInput?: T;
	// eslint-disable-next-line no-unused-vars
	onSuccess: (response: AxiosResponse) => void;
	// eslint-disable-next-line no-unused-vars
	onError: (error: AxiosError) => void;
}

export interface IQueryOptions {
	id?: number;
	enabled: boolean;
}

export type TSocialLogin = 'kakao' | 'naver';
