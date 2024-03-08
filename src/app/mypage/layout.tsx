import React from 'react';
import NavBar from '@/component/MyPage/common/NavBar';

export default function MypageLayout({children}: {children: React.ReactNode}) {
	return (
		<main className='h-[calc(100vh-200px)] w-[70vw] flex'>
			<NavBar />
			{children}
		</main>
	);
}
