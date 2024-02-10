'use client';

import StyledComponentsRegistry from '@/providers/StyledComponentsRegistry';
import GlobalStyle from '@/style/global';
import React from 'react';

/**************************************************
 * styled-component에 관한 로직 모음( registry)
 **************************************************/
const Providers = (props: React.PropsWithChildren) => {
	return (
		<StyledComponentsRegistry>
			<GlobalStyle />
			{props.children}
		</StyledComponentsRegistry>
	);
};

export default Providers;
