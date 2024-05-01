import React from 'react';
import Image from 'next/image';
import Menu from '@/component/header/Menu';
import Panel from '@/component/header/Panel';
import {lMenu} from '@/utils/label';

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
};

function Header() {
	return (
		<div className={'flex justify-center w-full h-24 bg-white'}>
			<section
				className={'flex justify-between w-3/5 min-w-max items-center'}
			>
				<Image
					src={data.logo.src}
					alt={data.logo.alt}
					width={150}
					height={32}
					className={'mr-8'}
				/>
				{/*메뉴에 관한 부분 입니다.*/}
				<section className='flex'>
					{Object.values(lMenu).map((m) => {
						return (
							<Menu
								key={`menu-${m.value}`}
								label={m.label}
								value={m.value}
							/>
						);
					})}
				</section>
				{/*우측 사용자 패널에 관한 부분입니다.*/}
				<Panel />
			</section>
		</div>
	);
}

export default Header;
