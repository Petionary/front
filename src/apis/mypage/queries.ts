import {getMypageApi} from './api';

export const mypageQueryKeys = {
	detail: ['mypage'] as const,
};

export const mypageQueryOptions = {
	detail: (id: number) => ({
		queryKey: mypageQueryKeys.detail,
		queryOptions: () => getMypageApi(id),
	}),
};
