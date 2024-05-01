import React from 'react';
import LoginButton from '@/component/login/button/LoginButton';
import {RectangleIcon} from '@/icons/default';

/**************************************************
 * 로그인 페이지
 **************************************************/
const data = {
	title: '간편 로그인',
	button: {
		kakao: 'kakao',
		naver: 'naver',
	},
};

function Login() {
	return (
		<div className={'flex flex-col items-center w-[350px] justify-center'}>
			<p className={'text-[28px] font-[600] mb-[40px]'}>{data.title}</p>
			<RectangleIcon className={'mb-8'} />
			{/*로그인 Auth 에 관한 로직입니다.*/}
			<div>
				<LoginButton loginType={data.button.kakao} />
				<LoginButton loginType={data.button.naver} />
			</div>
		</div>
	);
}

export default Login;
