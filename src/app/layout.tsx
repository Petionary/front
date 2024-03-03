'use client';

import React from 'react';
import Providers from '@/providers/Providers';
import Header from '@/component/header/Header';
import Head from '@/app/head';
import styled from 'styled-components';
import {GRAY_COLOR_10} from '@/style/theme';
import Footer from '@/component/Footer';

/**************************************************
 * 전역 Layout
 **************************************************/
export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html>
			<Head />
			<body>
				<Providers>
					<_Layout>
						<Header />
						<_Container>
							{children}
							{/*페이지마다 하단에 뜨게 하기*/}
							<Footer />
						</_Container>
					</_Layout>
				</Providers>
			</body>
		</html>
	);
}

const _Layout = styled.div`
	width: 100vw;
`;

const _Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	//flex: 1;
	width: 100%;
	height: calc(100vh - 80px);
	background-color: ${GRAY_COLOR_10};
	overflow: scroll;
`;
