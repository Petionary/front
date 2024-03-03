import React from 'react';
import styled from 'styled-components';
import {GRAY_COLOR_40, WHITE_COLOR} from '@/style/theme';

function PetCard() {
	return (
		<_Container>
			<_PetImage />
			<_PetName>🐶 유동이</_PetName>
		</_Container>
	);
}

export default PetCard;

const _Container = styled.div`
	width: 180px;
	height: 260px;
	padding: 20px;
	background-color: ${WHITE_COLOR};
`;

const _PetImage = styled.div`
	width: 120px;
	height: 120px;
	border-radius: 100%;
	background-color: ${GRAY_COLOR_40};
	margin: 0 0 20px 10px;
`;

const _PetName = styled.p``;
