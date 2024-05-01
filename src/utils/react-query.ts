import {QueryClient} from '@tanstack/react-query';
import {cache} from 'react';

export const makeQueryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000, // 데이터가 stale 상태가 되기까지의 시간(ms)
				refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을때 데이터를 refetch
				refetchOnMount: false, // 데이터가 stale 상태일때 컴포넌트가 mount 되면 refetch
				retry: 1, // API 요청에 실패했을 때 재시도 옵션 (default: 3)
			},
		},
	});
};

export const getQueryClient = cache(() => new QueryClient());
