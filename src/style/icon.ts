'use client';

import styled, {css} from 'styled-components';
import {
	GRAY_COLOR_100,
	GRAY_COLOR_40,
	PRIMARY_COLOR,
	SYSTEM_COLOR,
} from '@/style/theme';

/**************************************************
 * icon에 관한 로직
 * IType: 타입에 따라 아이콘 색 지정, 공용 타입으로 사용 예정
 * IconColorCss : 타입에 따라서 색깔을 지정
 * DefaultIcon : 아이콘 css 지정 margin size cursor
 * Icon : 기본 아이콘 css(이걸로 사용)
 *
 * 사용
 * <Icon size={'20px'} IType={IType.warning}>
 *  	{MyPageIcon}
 * </Icon>
 **************************************************/

// 아이콘 타입 정의
type TIcon =
	| 'cancel'
	| 'white'
	| 'disabled'
	| 'font'
	| 'highlight'
	| 'warning'
	| 'confirm'
	| 'refresh'
	| 'main';

// 아이콘 컴포넌트에 전달되는 프롭스의 타입 정의
interface IconProps {
	isDisabled?: boolean;
	size?: string;
	margin?: string;
	IType?: TIcon;
}

export const IType: {[key in TIcon]: TIcon} = {
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

const IconColorCss = css<IconProps>`
	${(props) =>
		props.IType === IType.main
			? PRIMARY_COLOR
			: props.IType === IType.warning
			? SYSTEM_COLOR
			: props.IType === IType.disabled
			? GRAY_COLOR_40
			: ''};
`;

// DefaultIcon 컴포넌트의 스타일 정의
const DefaultIcon = styled.span<IconProps>`
	cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
	display: flex;
	align-items: center;
	justify-content: center;
	margin: ${(props) => props.margin || '0px'};
	padding: 0px;
	svg {
		width: ${(props) => props.size};
		height: ${(props) => props.size};
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
