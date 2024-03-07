import React from 'react';
import Image from 'next/image';
import {logoutIcon, MyPageIcon} from '@/icons/default';

const data = {
	image: {
		alt: '프로젝트 로고',
	},
};

type IProps = {};

/**************************************************
 * 메인 페이지
 * 상단 컴포넌트
 * 로고, 메뉴, mypage 등 정보가 들어감
 * routing 부분은 차후 구현 예정
 **************************************************/

function Header() {
	return (
		<header className='flex justify-center w-full h-[100px] px-[15vw]'>
			<section className='flex justify-between w-[70vw] max-w-[1300px] items-center'>
				<Image
					src={'/logo_img.png'}
					alt={'프로젝트 로고'}
					width={180}
					height={42}
				/>
				<aside className='flex'>
					<div className='flex mx-[32px] items-center'>
						<span className='w-[20px] fill-system mr-[8px]'>
							{MyPageIcon}
						</span>
						<p>MY</p>
					</div>
					<div className='flex ml-[32px] items-center'>
						<span className='w-[20px] fill-system mr-[8px]'>
							{logoutIcon}
						</span>
						<p>LOGOUT</p>
					</div>
				</aside>
			</section>
		</header>
	);
}

export default Header;
