import React, {JSX} from 'react';
// import {IconStroke} from '@/style/icon';

/**************************************************
 * 소셜 로그인 버튼
 **************************************************/
type TProps = {
	icon: JSX.Element;
	content: string;
};

function LoginButton({icon, content}: TProps) {
	return (
		<div
			className={
				'bg-white flex items-center pl-[109px] w-[342px] h-[60px] mt-[15px] cursor-pointer border border-gray_40 rounded-[4px]'
			}
		>
			{/*<IconStroke size={'24px'}>*/}
			{icon}
			{/*</IconStroke>*/}
			<p className={'text-[16px] font-[600] text-gray_100 ml-[16px]'}>
				{content}
			</p>
		</div>
	);
}

export default LoginButton;
