'use client';

import React, {useState} from 'react';
import {useServerInsertedHTML} from 'next/navigation';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';

/**************************************************
 * 글로벌 스타일 레지스트리
 * 모든 스타일을 수집하여 태그에 적용하는
 * 전역 스타일 레지스트리 구성 요소 구현을 제안
 **************************************************/
const StyledComponentsRegistry = ({children}: {children: React.ReactNode}) => {
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return <>{styles}</>;
	});

	if (typeof window !== 'undefined') return <>{children}</>;

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			{children}
		</StyleSheetManager>
	);
};
export default StyledComponentsRegistry;
