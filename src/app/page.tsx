'use client';

import React from 'react';
import ProjectSummary from '@/component/home/ProjectSummary';
import PageSummary from '@/component/home/PageSummary';
import {oPageKey} from '@/utils/option';

/**************************************************
 * 메인 페이지
 **************************************************/
function Home() {
	return (
		<div id={'yourAppElement'} className={'w-[100%]'}>
			{/*<MyModal height={'10px'} />*/}
			<ProjectSummary />
			<PageSummary
				pageKey={oPageKey.best}
				// backgroundColor={GRAY_COLOR_30}
			/>
			<PageSummary
				pageKey={oPageKey.new}
				// backgroundColor={GRAY_COLOR_10}
			/>
			<PageSummary
				pageKey={oPageKey.report}
				// backgroundColor={GRAY_COLOR_30}
			/>
		</div>
	);
}

export default Home;
