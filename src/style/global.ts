'use client';

import {createGlobalStyle, css} from 'styled-components';
import {GRAY_COLOR_10} from '@/style/theme';

/**************************************************
 * 전역 css
 **************************************************/
const styles = css`
	html,
	body {
		justify-content: center;
		display: flex;
		margin: 0px;
		box-sizing: border-box;
		font-family: 'Pretendard';
		font-weight: normal;
		background-color: ${GRAY_COLOR_10};
	}
	//input 기본 스타일 제거(브라우저마다 다름)
	input,
	textarea {
		appearance: none;
		-webkit-appearance: none;
		-webkit-border-radius: 0;
	}

	//select 기본 스타일 제거(브라우저마다 다름)
	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: transparent;
		border: none;
		padding: 0;
	}
	div {
		box-sizing: border-box;
	}
`;

const GlobalStyle = createGlobalStyle`
  ${styles}
`;
export default GlobalStyle;
