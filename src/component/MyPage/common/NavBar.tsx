'use client';
import React from 'react';
import {usePathname, useRouter} from 'next/navigation';

function NavBar() {
	const pathname = usePathname();
	const {push} = useRouter();

	return (
		<aside className='flex flex-col w-[180px] py-[31.5px] border-r border-gray_40 bg-white px-[20px]'>
			<span
				className={`font-[600] py-[34.5px] text-[15px] text-left cursor-pointer ${
					pathname.split('/')[2] === 'user'
						? 'text-primary'
						: 'text-gray_60'
				}`}
				onClick={() => push('/mypage/user')}
			>
				회원정보
			</span>
			<span
				className={`font-[600] py-[30px] text-[15px] text-left cursor-pointer ${
					pathname.split('/')[2] === 'pet'
						? 'text-primary'
						: 'text-gray_60'
				}`}
				onClick={() => push('/mypage/pet')}
			>
				반려동물정보
			</span>
			{/* 활동정보 - 기획 후 추가 예정 */}
			{/* <span
				className={`font-[600] py-[30px] text-[15px] text-left cursor-pointer ${
					pathname.split('/')[2] === 'activities'
						? 'text-primary'
						: 'text-gray_60'
				}`}
				onClick={() => push('/mypage/activities')}
			>
				활동정보
			</span> */}
		</aside>
	);
}

export default NavBar;
