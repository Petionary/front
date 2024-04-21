'use client';

import React, {MouseEventHandler} from 'react';
import Title from '@/component/modal/Title';
import {url} from '@/utils/url';
import {useRouter} from 'next/navigation';

type TProps = {
	type: string;
	onClickClose: MouseEventHandler<HTMLButtonElement>;
};

function WelcomeMessageDisplay({type, onClickClose}: TProps) {
	const {push} = useRouter();

	const onClickPageMove = () => {
		push(url.myPage);
	};

	return (
		<div className={'h-full flex flex-col justify-around items-center'}>
			<Title type={type} />
			<div>
				<button
					onClick={onClickPageMove}
					className={
						'flex justify-center items-center w-64 h-16 border border-primary bg-primary rounded-[4px] text-[15px] font-bold text-white p-3'
					}
				>
					반려동물 프로필 입력하러 가기
				</button>
				<button
					onClick={onClickClose}
					className={
						'flex justify-center items-center w-64 h-16 border border-primary rounded-[4px] text-[15px] font-bold text-primary p-3 mt-10'
					}
				>
					입력하지 않고 넘어가기
				</button>
			</div>
		</div>
	);
}

export default WelcomeMessageDisplay;
