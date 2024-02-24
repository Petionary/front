import React from 'react';
import Providers from '@/providers/Providers';
import Header from '@/component/header/Header';
import Footer from '@/component/Footer';
import {Container, Layout} from '@/style/common';
import Head from '@/app/head';

/**************************************************
 * 전역 Layout
 **************************************************/
export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html>
			<Head />
			<body>
				<Providers>
					<Layout>
						<Header />
						<Container height={'calc(100vh - 250px)'}>
							{children}
						</Container>
						<Footer />
					</Layout>
				</Providers>
			</body>
		</html>
	);
}
