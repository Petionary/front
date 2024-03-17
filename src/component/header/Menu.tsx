'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

/**************************************************
 * Header에 들어가는 Panel 부분
 * Logout, MyPage 구현
 **************************************************/

const data = {
	home: {
		value: 'home',
		label: '홈',
		url: '/',
	},
	list: {
		value: 'list',
		label: '리스트',
		url: '/list',
	},
	map: {
		value: 'map',
		label: '지도',
		url: '/map',
	},
};

function Menu() {
	const {push} = useRouter();
	return (
		<section className='flex'>
			{Object.values(data).map((m, i) => {
				return (
					<div
						key={`menu-${m.value}`}
						className={'text-[16px] font-bold mr-4 cursor-pointer'}
						onClick={() => {
							push(m.url);
						}}
					>
						{m.label}
					</div>
				);
			})}
		</section>
	);
}

export default Menu;
