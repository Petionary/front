import React from 'react';
import '@/app/globals.css';

import Head from '@/app/head';
import Footer from '@/component/Footer';
import Providers from '@/providers/Providers';
import Header from '@/component/Header';

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html>
			<Head />
			<body className='flex flex-col items-center w-[100vw]'>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
