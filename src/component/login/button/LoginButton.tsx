'use client';
import React, {useEffect, useMemo} from 'react';
import {KakaoIcon, NaverIcon} from '@/icons/default';
import {useRouter} from 'next/navigation';
import {useSearchParams} from 'next/navigation';
import {useGetLoginController} from '@/services/auth/useAuthService';
import {authState} from '@/store/auth';
import {useSetRecoilState} from 'recoil';

/**************************************************
 * 소셜 로그인 버튼
 **************************************************/

export const loginInfo = {
	kakao: {
		value: 'kakao',
		label: '카카오 로그인',
		icon: KakaoIcon,
		url: `https://kauth.kakao.com/oauth/authorize`,
	},
	naver: {
		value: 'naver',
		label: '네이버 로그인',
		icon: NaverIcon,
		url: 'https://nid.naver.com/oauth2.0/authorize?response_type=code',
	},
	authInfo: {
		redirectUrl: 'http://localhost:3000/login',
	},
};

type TProps = {
	loginType: string;
};

function LoginButton({loginType}: TProps) {
	const router = useRouter();
	const params = useSearchParams();
	const AUTHORIZE_CODE = params.get('code');
	const setAuth = useSetRecoilState(authState);
	//사용 const auth = useRecoilValue(authState);

	const {isLoading, data, isError, error} = useGetLoginController(
		'kakao',
		AUTHORIZE_CODE || '',
	);

	const loginData = useMemo(() => {
		return loginInfo[loginType];
	}, [loginType]);

	const getKakaoAuthInfo = () => {
		const REDIRECT_URL = `redirect_uri=${loginInfo.authInfo.redirectUrl}`;
		const KAKAO_CLIENT_ID = `client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`;
		window.location.href = `${loginData.url}?${KAKAO_CLIENT_ID}&${REDIRECT_URL}&response_type=code`;
	};

	const getNaverAuthInfo = () => {
		const REDIRECT_URL = `redirect_uri=${loginInfo.authInfo.redirectUrl}`;
		const NAVER_CLIENT_ID = `client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}`;
		window.location.href = `${loginData.url}&${NAVER_CLIENT_ID}&state=Petionary&${REDIRECT_URL}`;
	};

	const onClickLogin = () => {
		switch (loginType) {
			case loginInfo.kakao.value:
				getKakaoAuthInfo();
				break;
			case loginInfo.naver.value:
				getNaverAuthInfo();
				break;
			default:
				return;
		}
	};

	useEffect(() => {
		console.log(data, isError);
		if (data) {
			sessionStorage.setItem('sessionId', 'dasd');
			setAuth({
				...{usename: 'asdasd'},
				type: 'login',
			});
			router.push('/');
		}
		if (isError) {
			console.log(error);
		}
	}, [data]);

	return (
		<div>
			<button
				key={`button-${loginData.value}`}
				className={
					'bg-white flex items-center pl-28 w-96 h-16 mt-4 border border-gray_40 rounded-xl'
				}
				onClick={onClickLogin}
			>
				<loginData.icon />
				<p className={'text-[18px] text-gray_100 ml-5'}>
					{loginData.label}
				</p>
			</button>
		</div>
	);
}

export default LoginButton;
