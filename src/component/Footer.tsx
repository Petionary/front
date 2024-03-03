'use client';

import React from 'react';
import {GRAY_COLOR_20} from '@/style/theme';
import styled from 'styled-components';

/**************************************************
 * 하단 컴포넌트
 * 차후 구현 예정
 **************************************************/
function Footer() {
	return (
		<_Container>
			<div>Footer입니다.</div>
		</_Container>
	);
}

export default Footer;

const _Container = styled.div`
	width: 100%;
	border: 1px solid red; //임시 로직입니다.
`;
