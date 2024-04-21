'use client';

import React, {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {authState} from '@/store/auth';
import {useRouter, useSearchParams} from 'next/navigation';
import {useGetLoginController} from '@/apis/auth/useAuthService';

function Kakao() {
	const router = useRouter();
	const params = useSearchParams();

	const AUTHORIZE_CODE = params.get('code');
	const setAuth = useSetRecoilState(authState);
	//사용 const auth = useRecoilValue(authState);

	const {data, error, isError} = useGetLoginController(
		'kakao',
		AUTHORIZE_CODE,
		{
			enabled: AUTHORIZE_CODE !== undefined,
		},
	);

	useEffect(() => {
		if (AUTHORIZE_CODE) {
			localStorage.setItem('localId', 'AUTHORIZE_CODE');
			setAuth({
				...{usename: '성지수'},
				type: 'login',
				code: AUTHORIZE_CODE,
			});
			router.push('/');
		}
	}, [AUTHORIZE_CODE]);

	return <div className={'flex items-center'}>로그인 중</div>;
}

export default Kakao;
