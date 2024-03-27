import React from 'react';
import ProjectSummary from '@/component/home/ProjectSummary';
import PageSummary, {oPageKey} from '@/component/home/PageSummary';
import MyModal from '@/component/modal/Modal';

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

			<MyModal />
		</div>
	);
}

export default Home;
