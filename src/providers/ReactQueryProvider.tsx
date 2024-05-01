'use client';

import React, {useState} from 'react';
import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import {makeQueryClient} from '@/utils/react-query';

const ReactQueryProvider = ({children}: {children: React.ReactNode}) => {
	const [queryClient] = useState(makeQueryClient);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default ReactQueryProvider;
