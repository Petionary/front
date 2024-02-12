import ReactQueryProvider from '@/providers/ReactQueryProvider';
import type {Metadata} from 'next';
import React from 'react';
import Providers from '@/providers/Providers';
import RecoilRootProvider from '@/providers/RecoilRootProvider';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import {Layout} from '@/style/common';
import Head from '@/app/head';

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html>
			<Head />
			<body>
				<Providers>
					<Layout>
						<Header />
						<main>{children}</main>
						<Footer />
					</Layout>
				</Providers>
			</body>
		</html>
	);
}
