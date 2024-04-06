import {getUserDetailApi} from './api';

export const userQueryKeys = {
	detail: ['user'] as const,
};

export const userQueryOptions = {
	detail: (id: number) => ({
		queryKey: userQueryKeys.detail,
		queryOptions: () => getUserDetailApi(id),
	}),
};
