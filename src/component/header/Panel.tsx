'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import {url} from '@/utils/url';
import {lPanel} from '@/utils/label';
import {useRecoilValue, useResetRecoilState} from 'recoil';
import {authState} from '@/store/auth';

/**************************************************
 * Header에 들어가는 Panel 부분
 * Logout, MyPage 구현
 **************************************************/

function Panel() {
	const {myPage, logout, login} = lPanel;
	const {push} = useRouter();
	const auth = useRecoilValue(authState);
	const resetAll = useResetRecoilState(authState);

	const onClickPageMove = () => {
		push(url.myPage);
	};

	const onClickLogout = () => {
		localStorage.clear();
		resetAll();
		push(url.login);
	};

	return (
		<aside className='flex'>
			{Object.keys(auth).length !== 0 ? (
				<>
					<div
						className='flex items-center m-2 cursor-pointer'
						onClick={onClickPageMove}
					>
						<myPage.icon className='size-5 fill-gray_100 mr-2' />
						<p>{myPage.label}</p>
					</div>

					<div
						className='flex items-center m-2 cursor-pointer'
						onClick={onClickLogout}
					>
						<logout.icon className='size-5 fill-gray_100 mr-2' />
						<p>{logout.label}</p>
					</div>
				</>
			) : (
				<div
					className='flex items-center m-2 cursor-pointer'
					onClick={onClickLogout}
				>
					<login.icon className='size-5 fill-gray_100 mr-2' />
					<p>{login.label}</p>
				</div>
			)}
		</aside>
	);
}

export default Panel;
