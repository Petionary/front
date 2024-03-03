'use client';

import {createGlobalStyle, css} from 'styled-components';
import {GRAY_COLOR_10} from '@/style/theme';

export const FONT = 'Pretendard';

/**************************************************
 * 전역 css
 **************************************************/
const styles = css`
	html,
	body {
		align-items: center;
		margin: 0px;
		box-sizing: border-box;
		font-family: ${FONT};
		font-weight: normal;
		background-color: ${GRAY_COLOR_10};
	}
	div {
		box-sizing: border-box;
	}
	h1,
	h2,
	h3,
	p {
		margin: 0;
		padding: 0;
	}
`;

const GlobalStyle = createGlobalStyle`
  ${styles}
`;
export default GlobalStyle;
