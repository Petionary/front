import React from 'react';
import ProjectSummary from '@/component/home/ProjectSummary';
import PageSummary, {oPageKey} from '@/component/home/PageSummary';
import MyModal from '@/component/modal/Modal';
import {useRecoilValue} from 'recoil';
import {authState} from '@/store/auth';

/**************************************************
 * 메인 페이지
 **************************************************/
function Home() {
	return (
		<div id={'yourAppElement'} className={'w-[100%]'}>
			<ProjectSummary />
			<PageSummary pageKey={oPageKey.best} />
			<PageSummary pageKey={oPageKey.new} />
			<PageSummary pageKey={oPageKey.report} />

			<MyModal />
		</div>
	);
}

export default Home;
