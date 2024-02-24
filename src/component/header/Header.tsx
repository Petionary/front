'use client'; //styled-component ssr 설정 완료 되면 제거 예정
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {logoutIcon, MyPageIcon} from '@/icons/default';
import {Container} from '@/style/common';
import Panel from '@/component/header/Panel';

/**************************************************
 * 메인 페이지
 * 상단 컴포넌트
 * 로고, 메뉴, mypage 등 정보가 들어감
 * routing 부분은 차후 구현 예정
 **************************************************/

const data = {
	logo: {
		alt: '프로젝트 로고',
		src: '/logo_img.png',
	},
	panel: {
		logout: 'LOGOUT',
		myPage: 'MY',
	},
};

function Header() {
	return (
		<Container height={'100px'}>
			<_Content>
				<Image
					src={data.logo.src}
					alt={data.logo.alt}
					width={150}
					height={32}
				/>
				<_MyPanelArea>
					<Panel icon={MyPageIcon} content={data.panel.myPage} />
					<Panel icon={logoutIcon} content={data.panel.logout} />
				</_MyPanelArea>
			</_Content>
		</Container>
	);
}

export default Header;

const _Content = styled.section`
	display: flex;
	justify-content: space-between;
	width: 70vw;
	max-width: 1300px;
	align-items: center;
`;

const _MyPanelArea = styled.aside`
	display: flex;
	p:first-child {
		margin-right: 32px;
	}
`;
