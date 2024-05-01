import React, {Children} from 'react';
import {black} from 'next/dist/lib/picocolors';

/**************************************************
 * tailwind 로 아이콘 커스텀 하는 부분입니다 아직 구현 중입니다.
 **************************************************/
interface IProps {
	className?: string;
	size?: string;
	children: React.ReactNode;
}

const colors = {
	black: ' [&_*]:fill-gray_100 ',
};

export function Icon({children, className, size = ''}: IProps) {
	const baseCss = 'flex items-center justify-center';
	const sizeCss = size && `[&>svg]:w-[${size}]`;
	return (
		<span className={`${baseCss} ${sizeCss}${colors.black}`}>
			{children}
		</span>
	);
}

export function IconStroke({children, size}: IProps) {
	return <span className={`[&_svg]:size-[${size}px]`}>{children}</span>;
}
