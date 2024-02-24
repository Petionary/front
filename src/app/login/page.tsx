'use client';

import React from 'react';
import styled from 'styled-components';
import LoginButton from '@/component/button/LoginButton';
import {GoogleIcon, KakaoIcon, NaverIcon, Rectangle} from '@/icons/default';
import {Icon} from '@/style/icon';

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
		<_Container>
			<_Title>{data.title}</_Title>
			<Icon margin={'0 0 40px 0'}>{Rectangle}</Icon>
			<LoginButton content={data.button.kakao} icon={KakaoIcon} />
			<LoginButton content={data.button.google} icon={GoogleIcon} />
			<LoginButton content={data.button.naver} icon={NaverIcon} />
		</_Container>
	);
}

export default Login;

const _Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 350px;
	height: 346px;
	margin-top: 90px;
`;
const _Title = styled.div`
	font-size: 22px;
	font-weight: 600;
	margin-bottom: 40px;
`;
