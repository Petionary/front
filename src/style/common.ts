'use client';

import styled from 'styled-components';

/**************************************************
 * 전역 styled
 * 공통적으로 사용하는 css입니다.
 **************************************************/

type TFlexContainer = {
	alignItems?: string;
	justifyContent?: string;
	flexDirection?: string;
};

export const FlexContainer = styled.div<TFlexContainer>`
	display: flex;
	align-items: ${(props) => props?.alignItems || 'center'};
	justify-content: ${(props) => props?.justifyContent || 'center'};
	flex-direction: ${(props) => props?.flexDirection || 'row'};=
`;

type TFontStyle = {
	fontSize: string;
	fontWeight?: number;
	color?: string;
};

export const FontStyle = styled.p<TFontStyle>`
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props?.fontWeight || 400};
	color: ${(props) => props?.color || '#000'};=
`;
