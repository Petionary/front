'use client'; //styled-component ssr 설정 완료 되면 제거 예정
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {Icon, iType} from '@/style/icon';
import {logoutIcon, MyPageIcon} from '@/icons/default';
import {Container} from '@/style/common';

const data = {
	image: {
		alt: '프로젝트 로고',
	},
};

type IProps = {};

/**************************************************
 * 메인 페이지
 * 상단 컴포넌트
 * 로고, 메뉴, mypage 등 정보가 들어감
 * routing 부분은 차후 구현 예정
 **************************************************/
function Header() {
	return (
		<Container>
			<_ContentLayout>
				<Image
					src={'/logo_img.png'}
					alt={'프로젝트 로고'}
					width={180}
					height={42}
				/>
				<_MyPanelArea>
					<_IconWrapper>
						<Icon
							size={'20px'}
							iType={iType.warning}
							margin={'0 8px 0 0'}
						>
							{MyPageIcon}
						</Icon>
						<p>MY</p>
					</_IconWrapper>

					<_IconWrapper>
						<Icon size={'20px'} margin={'0 8px 0 0'}>
							{logoutIcon}
						</Icon>
						<p>LOGOUT</p>
					</_IconWrapper>
				</_MyPanelArea>
			</_ContentLayout>
		</Container>
	);
}

export default Header;

const _ContentLayout = styled.section`
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

const _IconWrapper = styled.div`
	display: flex;
	margin: 0 0 0 32px;
`;
