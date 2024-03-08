import React from 'react';
import ReactQueryProvider from './ReactQueryProvider';
import RecoilRootProvider from './RecoilRootProvider';

/**************************************************
 * provider 에 관한 파일입니다.
 * react query, recoil, styled-component
 **************************************************/
const Providers = (props: React.PropsWithChildren) => {
	return (
		<ReactQueryProvider>
			<RecoilRootProvider>{props.children}</RecoilRootProvider>
		</ReactQueryProvider>
	);
};

export default Providers;
