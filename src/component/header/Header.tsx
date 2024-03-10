'use client'; //styled-component ssr 설정 완료 되면 제거 예정
import React from 'react';
import Image from 'next/image';
import {logoutIcon, MyPageIcon} from '@/icons/default';
import Panel from '@/component/header/Panel';

/**************************************************
 * 메인 페이지
 * 상단 컴포넌트
 * 로고, 메뉴, mypage 등 정보가 들어감
 * routing 부분은 차후 구현 예정
 **************************************************/

const data = {
	logo: {
		alt: '프로젝트 로고',
		src: '/logo_img.png',
	},
	panel: {
		logout: 'LOGOUT',
		myPage: 'MY',
	},
};

function Header() {
	return (
		<div className={'flex justify-center w-full h-[80px] bg-white'}>
			<section className={'flex justify-between w-[60%] items-center'}>
				<Image
					src={data.logo.src}
					alt={data.logo.alt}
					width={150}
					height={32}
				/>
				{/*우측 사용자 패널에 관한 부분입니다.*/}
				<aside className={'flex'}>
					<Panel icon={MyPageIcon} content={data.panel.myPage} />
					<Panel icon={logoutIcon} content={data.panel.logout} />
				</aside>
			</section>
		</div>
	);
}

export default Header;
