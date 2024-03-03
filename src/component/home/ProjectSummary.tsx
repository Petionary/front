import React from 'react';
import {Icon} from '@/style/icon';
import {MoveToNextScreenArrowIcon} from '@/icons/default';
import styled from 'styled-components';
import {GRAY_COLOR_20, SECONDARY_COLOR} from '@/style/theme';

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
		<_Container>
			<_Wrapper>
				<_FlexContainer>
					<_Title>{data.title}</_Title>
					<_ContentWrapper>
						<_ContentWrapper>
							<_Content>{data.content}</_Content>
							<_Content>{data.title}</_Content>
						</_ContentWrapper>
						<_Description>{data.description.first}</_Description>
						<_Description>{data.description.second}</_Description>
					</_ContentWrapper>
				</_FlexContainer>
				<_IconWrapper>
					<Icon size={'20px'} margin={'0 0 8px 0'}>
						{MoveToNextScreenArrowIcon}
					</Icon>
					<_ScrollDownText>Scroll down</_ScrollDownText>
				</_IconWrapper>
			</_Wrapper>
		</_Container>
	);
}

export default ProjectSummary;

const _Container = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${GRAY_COLOR_20};
	width: 100%;
`;

const _Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
	min-height: 645px;
`;

const _FlexContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 80%;
`;

const _ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
`;

const _IconWrapper = styled.div`
	position: relative;
	top: 150px;
`;

const _Title = styled.div`
	font-size: 70px;
	font-weight: 700;
	line-height: 70px;
`;

const _Content = styled.div`
	font-size: 25px;
	font-weight: 200;
`;

const _Description = styled.div`
	justify-content: left;
	font-size: 14px;
	font-weight: 200;
	margin-bottom: 5px;
`;

const _ScrollDownText = styled.p`
	font-family: Inter;
	font-weight: 400;
	font-size: 13px;
	text-align: center;
	color: ${SECONDARY_COLOR};
`;
