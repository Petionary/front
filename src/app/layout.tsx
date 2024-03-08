import React from 'react';
import Providers from '@/providers/Providers';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Head from '@/app/head';
import './globals.css';

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
