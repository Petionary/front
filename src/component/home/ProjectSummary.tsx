import React from 'react';
import {MoveToNextScreenArrowIcon} from '@/icons/default';
import {SummaryContainer} from '@/style/Container';

const data = {
	title: 'PETIONARY',
	content: '반려동물과 함께 하는 공간',
	description: [
		'🏡 반려동물 전용 장소부터 동반 장소까지 모두 모여있어요.',
		'🔔 반려동물 분실 신고시 주변 이용자에게 알림을 전달해요.',
	],
};

function ProjectSummary() {
	return (
		<SummaryContainer bgColor={'bg-gray_20'} className={'items-center'}>
			<div className={'flex justify-around'}>
				<p className={'text-6xl font-extrabold  mr-16'}>{data.title}</p>
				<div className={'flex flex-col'}>
					<div className={'flex flex-col mb-11'}>
						<p className={'text-2xl font-bold'}>{data.content}</p>
						<p className={'text-2xl font-bold'}>{data.title}</p>
					</div>
					{data.description.map((d) => {
						return (
							<p key={`desc-${d}`} className={'text-[14px] mt-1'}>
								{d}
							</p>
						);
					})}
				</div>
			</div>
			<div className={'relative top-36 flex flex-col items-center'}>
				<MoveToNextScreenArrowIcon className={'m-3'} />
				<p className={'text-[16px] font-bold text-secondary font-iter'}>
					Scroll down
				</p>
			</div>
		</SummaryContainer>
	);
}

export default ProjectSummary;
