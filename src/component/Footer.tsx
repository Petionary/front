'use client';
import {useParams} from 'next/navigation';
import {useRouter} from 'next/router';
import React from 'react';

/**************************************************
 * 하단 컴포넌트
 * 차후 구현 예정
 **************************************************/
function Footer() {
	// const {pathname} = useRouter();
	// console.log(pathname);
	return (
		<footer className='flex justify-center w-full h-[100px] bg-gray_20'>
			Footer 로직
		</footer>
	);
}

export default Footer;

// const _Container = styled.div`
// 	width: 100%;
// 	border: 1px solid red; //임시 로직입니다.
// `;
