import React, {JSX} from 'react';
import styled from 'styled-components';
import InfoView from '@/component/home/InfoView';
import PlaceCard from '@/component/card/PlaceCard';
import {GRAY_COLOR_30, GRAY_COLOR_50} from '@/style/theme';
import {oPageKey} from '@/utils/option';
import PetCard from '@/component/card/PetCard';

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

type TProps = {
	pageKey: string;
	backgroundColor: string;
};

function PageSummary({pageKey, backgroundColor}: TProps) {
	return (
		<_Container backgroundColor={backgroundColor}>
			<Wrapper>
				<InfoView
					title={data.title[pageKey]}
					description={data.description[pageKey]}
				/>
				{pageKey === oPageKey.best && (
					<_FlexContainer>
						<PlaceCard />
						<PlaceCard />
						<PlaceCard />
					</_FlexContainer>
				)}
				{pageKey === oPageKey.new && (
					<_FlexContainer>
						<PlaceList>
							{data.newPlace.map((p, i) => {
								return <Place key={i}>{p}</Place>;
							})}
						</PlaceList>
						<PlaceImage />
					</_FlexContainer>
				)}
				{pageKey === oPageKey.report && (
					<_FlexContainer>
						<PetCard />
						<PetCard />
						<PetCard />
					</_FlexContainer>
				)}
			</Wrapper>
		</_Container>
	);
}

export default PageSummary;

type TContainer = {
	backgroundColor: string;
};

const _Container = styled.div<TContainer>`
	display: flex;
	justify-content: center;
	background-color: ${(props) => props.backgroundColor};
	width: 100%;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60%;
	min-height: 645px;
`;

const PlaceList = styled.div`
	display: flex;
	flex-direction: column;
`;

const Place = styled.p`
	font-size: 16px;
	margin-bottom: 20px;
`;

const PlaceImage = styled.div`
	height: 270px;
	width: 400px;
	border-radius: 80px 0 0 0;
	background-color: ${GRAY_COLOR_50};
`;
const _FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
