import React from 'react';
import ProjectSummary from '@/component/home/ProjectSummary';
import PageSummary, {oPageKey} from '@/component/home/PageSummary';

/**************************************************
 * 메인 페이지
 **************************************************/
function Home() {
	return (
		<div id={'yourAppElement'} className={'w-[100%]'}>
			{/*<MyModal height={'10px'} />*/}
			<ProjectSummary />
			<PageSummary pageKey={oPageKey.best} />
			<PageSummary pageKey={oPageKey.new} />
			<PageSummary pageKey={oPageKey.report} />
		</div>
	);
}

export default Home;
