import React from 'react';
import '@/app/globals.css';

import Head from '@/app/head';
import Footer from '@/component/footer/Footer';
import Providers from '@/providers/Providers';
import Header from '@/component/header/Header';

/**************************************************
 * 전역 Layout
 **************************************************/
export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html>
			<Head />
			<body className='flex flex-col items-center w-[100vw]'>
				<Providers>
					<div className={'w-[100vw]'}>
						<Header />
						<div
							className={
								'h-[calc(100vh-80px)] flex flex-col content-between w-[100%] bg-gray_10 overflow-scroll'
							}
						>
							{children}
							{/*페이지마다 하단에 뜨게 하기*/}
							<Footer />
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}

// const _Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// 	//flex: 1;
// 	width: 100%;
// 	height: calc(100vh - 80px);
// 	background-color: ${GRAY_COLOR_10};
// 	overflow: scroll;
// `;
