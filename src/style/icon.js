import styled, {css} from 'styled-components';
import {GRAY_COLOR_100, GRAY_COLOR_40, PRIMARY_COLOR, SYSTEM_COLOR} from '@/styles/theme';

/**************************************************
 * icon에 관한 로직
 **************************************************/
export const iType = {
	cancel: 'cancel',
	white: 'white',
	disabled: 'disabled',
	font: 'font',
	highlight: 'highlight',
	warning: 'warning',
	confirm: 'confirm',
	refresh: 'refresh',
	main: 'main',
};

const IconColorCss = css`
	${(props) =>
		props?.iType === iType.main
			? PRIMARY_COLOR
			: props?.iType === iType.warning
			? SYSTEM_COLOR
			: props?.iType === iType.disabled
			? GRAY_COLOR_40
			: GRAY_COLOR_100};
`;

// interface IDefaultType {
// 	isDisabled?: boolean;
// 	size?: number; //문자열인지 확인 필요
// 	margin?: string;
// }

const DefaultIcon = styled.span`
	cursor: ${(props) => (props?.isDisabled ? 'default' : 'pointer')};
	display: flex;
	align-items: center;
	justify-content: center;
	margin: ${(props) => props?.margin || '0px'};
	padding: 0px;
	svg {
		width: ${(props) => props?.size};
		height: ${(props) => props?.size};
	}
`;

export const Icon = styled(DefaultIcon)`
	svg {
		fill: ${IconColorCss};
	}
	path {
		fill: ${IconColorCss};
	}
	circle {
		fill: ${IconColorCss};
	}
`;

export const IconStroke = styled(DefaultIcon)`
	svg {
		stroke: ${IconColorCss};
	}
	path {
		stroke: ${IconColorCss};
	}
`;
