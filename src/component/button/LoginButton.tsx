'use client';

import React, {JSX} from 'react';
import styled from 'styled-components';
import {GRAY_COLOR_100, GRAY_COLOR_40} from '@/style/theme';
import {IconStroke} from '@/style/icon';

/**************************************************
 * 소셜 로그인 버튼
 **************************************************/
type TProps = {
	icon: JSX.Element;
	content: string;
};

type TStyle = {
	margin?: string;
};

function LoginButton({icon, content}: TProps) {
	return (
		<_Container
			onClick={() => {
				alert('호출');
			}}
		>
			<IconStroke size={'24px'}>{icon}</IconStroke>
			<_Content>{content}</_Content>
		</_Container>
	);
}

export default LoginButton;

const _Container = styled.div<TStyle>`
	display: flex;
	align-items: center;
	width: 342px;
	height: 60px;
	padding-left: 109px;
	border: 1px solid ${GRAY_COLOR_40};
	border-radius: 4px;
	margin: 0 0 12px 0;
	cursor: pointer;
`;

const _Content = styled.div`
	font-size: 14px;
	font-weight: 600;
	color: ${GRAY_COLOR_100};
	margin-left: 16px;
`;
