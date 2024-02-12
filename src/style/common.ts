'use client';

import styled from 'styled-components';

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

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100px;
	background-color: ${(props) => props.color || '#0000'};
`;
