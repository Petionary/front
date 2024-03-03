'use client';

import React from 'react';
import styled from 'styled-components';
import ProjectSummary from '@/component/home/ProjectSummary';
import PageSummary from '@/component/home/PageSummary';
import {oPageKey} from '@/utils/option';
import {GRAY_COLOR_10, GRAY_COLOR_30} from '@/style/theme';

/**************************************************
 * 메인 페이지
 **************************************************/
function Home() {
	return (
		<_Container id={'yourAppElement'}>
			{/*<MyModal height={'10px'} />*/}
			<ProjectSummary />
			<PageSummary
				pageKey={oPageKey.best}
				backgroundColor={GRAY_COLOR_30}
			/>
			<PageSummary
				pageKey={oPageKey.new}
				backgroundColor={GRAY_COLOR_10}
			/>
			<PageSummary
				pageKey={oPageKey.report}
				backgroundColor={GRAY_COLOR_30}
			/>
		</_Container>
	);
}

export default Home;

const _Container = styled.div`
	width: 100%;
`;
