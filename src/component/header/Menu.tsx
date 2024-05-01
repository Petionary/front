'use client';

import React, {useMemo} from 'react';
import {useRouter, usePathname} from 'next/navigation';
import {url} from '@/utils/url';

/**************************************************
 * Header에 들어가는 Panel 부분
 * Logout, MyPage 구현
 **************************************************/

type TProps = {
	value: string;
	label: string;
};

function Menu({label, value}: TProps) {
	const {push} = useRouter();
	const pathname = usePathname();

	const currentPathCss = useMemo(() => {
		return url[value] === pathname ? 'border-b-2 border-gray_100' : '';
	}, [value, pathname]);

	return (
		<div
			key={`menu-${value}`}
			className={`${currentPathCss} text-center text-[16px] mr-8 cursor-pointer`}
			onClick={() => {
				push(url[value]);
			}}
		>
			{label}
		</div>
	);
}

export default Menu;
