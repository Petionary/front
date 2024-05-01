import React from 'react';
import InfoView from '@/component/home/InfoView';
import PlaceCard from '@/component/card/PlaceCard';
import PetCard from '@/component/card/PetCard';
import {SummaryContainer} from '@/style/Container';

export const oPageKey = {
	best: 'best',
	new: 'new',
	report: 'report',
};

const data = {
	title: {
		[oPageKey.best]: 'BEST PLACE',
		[oPageKey.new]: 'NEW PLACE',
		[oPageKey.report]: '관심 지역 분실 신고',
	},
	description: {
		[oPageKey.best]: '관심 지역 주변 가장 평점이 높은 곳이에요. ',
		[oPageKey.new]: '이번 주말은 새로운 장소 어때요?',
		[oPageKey.report]:
			'가족들이 애타게 찾고 있어요. 목격 시 주인에게 쪽지를 보내주세요.',
	},
	newPlace: ['카페', '음식점', '호텔', '공원', '미용실', '캠핑장', '기타'],
};

const bgColor = {
	[oPageKey.best]: ' bg-gray_30',
	[oPageKey.new]: ' bg-gray_20',
	[oPageKey.report]: ' bg-gray_30',
};

type TProps = {
	pageKey: string;
};

function PageSummary({pageKey}: TProps) {
	return (
		<SummaryContainer bgColor={bgColor[pageKey]}>
			<InfoView
				title={data.title[pageKey]}
				description={data.description[pageKey]}
			/>
			{pageKey === oPageKey.best && (
				<div className={'flex justify-between'}>
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
				</div>
			)}
			{pageKey === oPageKey.new && (
				<div className={'flex justify-between'}>
					<div className={'flex flex-col'}>
						{data.newPlace.map((p, i) => {
							return (
								<p className={'text-[16px] mb-[20px]'} key={i}>
									{p}
								</p>
							);
						})}
					</div>
					<div
						className={
							'w-[400px] h-[270px] bg-gray_50 rounded-tl-[80px]'
						}
					>
						이미지 넣을 예정
					</div>
				</div>
			)}
			{pageKey === oPageKey.report && (
				<div className={'flex justify-between'}>
					<PetCard />
					<PetCard />
					<PetCard />
				</div>
			)}
		</SummaryContainer>
	);
}

export default PageSummary;
