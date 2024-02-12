import StyledComponentsRegistry from '@/providers/StyledComponentsRegistry';
import GlobalStyle from '@/style/global';
import React from 'react';
import RecoilRootProvider from '@/providers/RecoilRootProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

/**************************************************
 * provider 에 관한 파일입니다.
 * react query, recoil, styled-component
 **************************************************/
const Providers = (props: React.PropsWithChildren) => {
	return (
		<ReactQueryProvider>
			<RecoilRootProvider>
				<StyledComponentsRegistry>
					<GlobalStyle />
					{props.children}
				</StyledComponentsRegistry>
			</RecoilRootProvider>
		</ReactQueryProvider>
	);
};

export default Providers;
