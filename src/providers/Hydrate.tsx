import {ReactNode} from 'react';
import {HydrationBoundary, dehydrate} from '@tanstack/react-query';

import {getQueryClient} from '@/utils/react-query';
import {IQueryProps} from '@/types/common';

/**************************************************
 * Server side에서 Data를 prefetch 후
 * Client side로 전달하기 위한 Provider
 
 * props로 queryProps = {queryKey, queryFn}을 전달 하면
 1. queryClient를 새롭게 생성하고
 2. prefetchQuery 메서드 -> 렌더링 이전에 데이터를 fetch
 3. dehydrage 메서드 -> prefetch된 react query의 상태 직렬화
 4. HydrationBoundary의 state prop으로 직렬화된 상태를 전달
 5. HydrationBoundary 내부에서 queryProp를 fetch할 경우
 6. prefetch된 data로 응답된다.

 *  전역에서의 Provider를 통해 개별 Hydrate 사용 없이 
 *  dehydrate/hydrate가 적용될 수 있도록 수정할 예정
 **************************************************/

interface IHydrateProps {
	queryProps: IQueryProps;
	children: ReactNode;
}

const Hydrate = async ({children, queryProps}: IHydrateProps) => {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(queryProps);
	const dehydratedState = dehydrate(queryClient);

	return (
		<HydrationBoundary state={dehydratedState}>
			{children}
		</HydrationBoundary>
	);
};

export default Hydrate;
