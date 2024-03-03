'use client';

import React from 'react';
import styled from 'styled-components';
import LoginButton from '@/component/button/LoginButton';
import {GoogleIcon, KakaoIcon, NaverIcon, RectangleIcon} from '@/icons/default';
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
			<_Content>
				<_Title>{data.title}</_Title>
				<Icon margin={'0 0 40px 0'}>{RectangleIcon}</Icon>
				{/*로그인 Auth 에 관한 로직입니다.*/}
				<LoginButton content={data.button.kakao} icon={KakaoIcon} />
				<LoginButton content={data.button.google} icon={GoogleIcon} />
				<LoginButton content={data.button.naver} icon={NaverIcon} />
			</_Content>
		</_Container>
	);
}

export default Login;

const _Container = styled.div`
	display: flex;
	justify-content: center;
	//width: 100%;
`;

const _Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 350px;
	margin-top: 140px;
`;

const _Title = styled.div`
	font-size: 22px;
	font-weight: 600;
	margin-bottom: 40px;
`;
