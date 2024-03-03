import React from 'react';
import styled from 'styled-components';
import {
	GRAY_COLOR_100,
	GRAY_COLOR_50,
	GRAY_COLOR_70,
	WHITE_COLOR,
} from '@/style/theme';

function PlaceCard() {
	return (
		<_Container>
			<_ImageInner />
			<_ContentWrapper>
				<div>
					<_Title>장소 이름</_Title>
					<_Additional>서울특별시 양천구 신정동</_Additional>
					<_Additional>02-1234-6789</_Additional>
				</div>
				<_Additional>0.5km</_Additional>
			</_ContentWrapper>
		</_Container>
	);
}

export default PlaceCard;

const _Container = styled.div`
	width: 250px;
	height: 280px;
`;

//이미지 넣을 곳
const _ImageInner = styled.div`
	width: 100%;
	height: 120px;
	background-color: ${GRAY_COLOR_50};
`;

const _ContentWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 140px;
	background-color: ${WHITE_COLOR};
	padding: 10px 0 10px 10px;
`;

const _Title = styled.p`
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 8px;
	color: ${GRAY_COLOR_100};
`;

const _Additional = styled.p`
	font-size: 12px;
	font-weight: 400;
	margin-bottom: 4px;
	color: ${GRAY_COLOR_70};
`;
