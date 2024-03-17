'use client';
import React from 'react';
import {GoogleIcon, KakaoIcon, NaverIcon} from '@/icons/default';

/**************************************************
 * 소셜 로그인 버튼
 **************************************************/

const data = {
	kakao: {value: 'kakao', label: '카카오 로그인', icon: KakaoIcon},
	google: {value: 'google', label: '구글 로그인', icon: GoogleIcon},
	naver: {value: 'naver', label: '네이버 로그인', icon: NaverIcon},
};

function LoginButton() {
	//TODO:: 로그인 체크 로직 구현 예정
	const onClickLogin = () => {
		console.log(process.env.API_URL);
		// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?
		// client_id=${'REST_API_KEY'}&redirect_uri=${'REDIRECT_URI'}&response_type=code`;
		// window.location.href = KAKAO_AUTH_URL;
		// const AUTHORIZATION_CODE: string = new URL(
		// 	document.location.toString(),
		// ).searchParams.get('code') as string;
	};

	return (
		<div>
			{Object.values(data).map((b) => {
				return (
					<button
						key={`button-${b.value}`}
						className={
							'bg-white flex items-center pl-[109px] w-[342px] h-[60px] mt-[15px] border border-gray_40 rounded-[4px]'
						}
						onClick={onClickLogin}
					>
						<b.icon />
						<p
							className={
								'text-[16px] font-[600] text-gray_100 ml-[16px]'
							}
						>
							{b.label}
						</p>
					</button>
				);
			})}
		</div>
	);
}

export default LoginButton;
