import React, {JSX} from 'react';
// import {Icon} from '@/style/icon';

/**************************************************
 * Header에 들어가는 Panel 부분
 * Logout, MyPage 구현
 **************************************************/
type TProps = {
	icon: JSX.Element;
	content: string;
};

function Panel({icon, content}: TProps) {
	return (
		<div className={'flex ml-[32px]'}>
			{/*<Icon size={'18px'} margin={'0 8px 0 0'}>*/}
			{icon}
			{/*</Icon>*/}
			<p className={'text-[15px] font-normal'}>{content}</p>
		</div>
	);
}

export default Panel;
