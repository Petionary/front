'use client';

import React from 'react';
import {LogoutIcon, MyPageIcon} from '@/icons/default';
import {useRouter} from 'next/navigation';

/**************************************************
 * Header에 들어가는 Panel 부분
 * Logout, MyPage 구현
 **************************************************/

const data = {
	myPage: {
		value: 'my',
		label: 'MY',
		icon: MyPageIcon,
	},
	logout: {
		value: 'logout',
		label: 'LOGOUT',
		icon: LogoutIcon,
	},
};

function Panel() {
	//TODO:: 마이페이지는 이동 로그인은 기능 수행 저장
	// const onClickPanel = (v) => {};
	const {myPage, logout} = data;
	const {push} = useRouter();

	const onClickPageMove = () => {
		push('/mypage');
	};

	const onClickLogout = () => {
		alert('로그아웃');
		push('/login');
	};

	return (
		<aside className='flex'>
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
		</aside>
	);
}

export default Panel;
