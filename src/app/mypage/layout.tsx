import React from 'react';
import NavBar from '@/component/mypage/common/NavBar';

export default function MypageLayout({children}: {children: React.ReactNode}) {
	return (
		<main className='h-[100vh] px-[15vw] flex bg-gray_10'>
			<NavBar />
			{children}
		</main>
	);
}
