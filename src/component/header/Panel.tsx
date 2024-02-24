import React, {JSX} from 'react';
import {Icon} from '@/style/icon';
import styled from 'styled-components';

/**************************************************
 * Header에 들어가는 Panel 부분
 * Logout, MyPage 구현
 **************************************************/
type TProps = {
	icon: JSX.Element;
	content: string;
};

function Panel({icon, content}: TProps) {
	return (
		<_Container>
			<Icon size={'18px'} margin={'0 8px 0 0'}>
				{icon}
			</Icon>
			<_Content>{content}</_Content>
		</_Container>
	);
}

export default Panel;

const _Container = styled.div`
	display: flex;
	margin: 0 0 0 32px;
`;

const _Content = styled.p`
	font-size: 15px;
`;
