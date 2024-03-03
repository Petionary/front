'use client';

import {GRAY_COLOR_40, GRAY_COLOR_60, PRIMARY_COLOR} from '@/style/theme';
import {usePathname} from 'next/navigation';
import styled from 'styled-components';

function NavBar() {
	const pathname = usePathname();

	const getIsCurrPage = (input: string) => {
		return pathname.split('/')[2] === input;
	};

	return (
		<StyledAside>
			<NavItem currpage={getIsCurrPage('user')}>회원정보</NavItem>
			<NavItem currpage={getIsCurrPage('pet')}>반려동물정보</NavItem>
			<NavItem currpage={getIsCurrPage('activities')}>활동정보</NavItem>
		</StyledAside>
	);
}

export default NavBar;

const StyledAside = styled.aside`
	display: flex;
	flex-direction: column;
	width: 180px;
	padding: 30px 0;
	text-align: center;
	border-right: 2px solid ${GRAY_COLOR_40};
`;

const NavItem = styled.span<{currpage: boolean}>`
	padding: 30px 0;
	font-size: 20px;
	text-align: left;
	font-weight: ${(props) => (props.currpage ? 600 : 400)};
	color: ${(props) => (props.currpage ? PRIMARY_COLOR : GRAY_COLOR_60)};
`;
