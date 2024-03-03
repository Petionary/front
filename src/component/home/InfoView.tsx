import React, {JSX} from 'react';
import styled from 'styled-components';
import {GRAY_COLOR_100, GRAY_COLOR_60, GRAY_COLOR_70} from '@/style/theme';

const data = {
	allView: '전체보기',
};

type TProps = {
	title: string;
	description: string;
};
function InfoView({title, description}: TProps) {
	return (
		<_Container>
			<_FlexContainer>
				<_Title>{title}</_Title>
				<_ViewAllLink>{data.allView}</_ViewAllLink>
			</_FlexContainer>
			<_Description>{description}</_Description>
		</_Container>
	);
}

export default InfoView;

const _Container = styled.div`
	margin-bottom: 40px;
`;

const _FlexContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 6px;
`;

const _Title = styled.h3`
	font-size: 34px;
	font-weight: 700;
	margin-right: 24px;
	color: ${GRAY_COLOR_100};
`;

const _Description = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: ${GRAY_COLOR_60};
`;

const _ViewAllLink = styled.p`
	font-size: 12px;
	font-weight: 400;
	color: ${GRAY_COLOR_70};
	border-bottom: 1px solid ${GRAY_COLOR_70};
`;
