import React from 'react';
// import {Icon} from '@/style/icon';
import {MoveToNextScreenArrowIcon} from '@/icons/default';

const data = {
	title: 'PETIONARY',
	content: '반려동물과 함께 하는 공간',
	description: {
		first: '🏡 반려동물 전용 장소부터 동반 장소까지 모두 모여있어요.',
		second: '🔔 반려동물 분실 신고시 주변 이용자에게 알림을 전달해요.',
	},
};

function ProjectSummary() {
	return (
		<div className={'flex justify-center w-[100%] bg-gray_20'}>
			<div
				className={
					'flex flex-col items-center justify-center w-[80%] min-h-[645px]'
				}
			>
				<div className={'flex justify-around w-[80%]'}>
					<p
						className={
							'text-[70px] font-[700] leading-[70px] mr-[30px]'
						}
					>
						{data.title}
					</p>
					<div className={'flex flex-col mb-[50px]'}>
						<div className={'flex flex-col mb-[50px]'}>
							<p className={'text-[25px] font-[600]'}>
								{data.content}
							</p>
							<p className={'text-[25px] font-[600]'}>
								{data.title}
							</p>
						</div>
						<p className={'text-[14px] font-[200] mb-[5px]'}>
							{data.description.first}
						</p>
						<p className={'text-[14px] font-[200] mb-[5px]'}>
							{data.description.second}
						</p>
					</div>
				</div>
				<div className={'relative top-[150px]'}>
					{/*<Icon size={'20px'} margin={'0 0 8px 0'}>*/}
					<MoveToNextScreenArrowIcon />
					{/*</Icon>*/}
					<p
						className={
							'text-[16px] font-[600] text-secondary text-center font-iter'
						}
					>
						Scroll down
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectSummary;
