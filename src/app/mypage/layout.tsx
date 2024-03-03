'use client';

import React from 'react';
import styled from 'styled-components';
import NavBar from '@/component/MyPage/common/NavBar';

export default function MypageLayout({children}: {children: React.ReactNode}) {
	return (
		<MainContainer>
			<NavBar />
			{children}
		</MainContainer>
	);
}

const MainContainer = styled.main`
	height: calc(100vh - 200px);
	width: 70vw;
	display: flex;
`;
