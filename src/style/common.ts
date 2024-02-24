'use client';

import styled from 'styled-components';

type TProps = {
	height?: string;
	color?: string;
};

/**************************************************
 * 전역 styled
 * 공통적으로 사용하는 css입니다.
 **************************************************/
export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
`;

export const Container = styled.div<TProps>`
	display: flex;
	justify-content: center;
	width: 100%;
	border: 1px solid red; //임시 로직입니다.
	height: ${(props) => props.height || ''};
	background-color: ${(props) => props.color || '#0000'};
`;
