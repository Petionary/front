import React from 'react';
import LoginButton from '@/component/login/button/LoginButton';
import {GoogleIcon, KakaoIcon, NaverIcon, RectangleIcon} from '@/icons/default';
// import {Icon} from '@/style/icon';

/**************************************************
 * 로그인 페이지
 **************************************************/
const data = {
	title: '간편 로그인',
	button: {
		kakao: '카카오 로그인',
		google: '구글 로그인',
		naver: '네이버 로그인',
	},
};

function Login() {
	return (
		<div className={'flex justify-center'}>
			<div className={'flex flex-col items-center w-[350px] mt-[140px]'}>
				<p className={'text-[28px] font-[600] mb-[40px]'}>
					{data.title}
				</p>
				<RectangleIcon className={'mb-8'} />
				{/*로그인 Auth 에 관한 로직입니다.*/}
				<LoginButton />
			</div>
		</div>
	);
}

export default Login;
