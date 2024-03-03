'use client';

import styled from 'styled-components';
import UserInfo from './components/UserInfo';
import UserPlace from './components/UserPlace';
import {IUser} from '@/types/common';

interface IProps {
	user: IUser;
}

function UserPage({user}: IProps) {
	return (
		<Container>
			<UserInfo />
			<UserPlace />
		</Container>
	);
}

export default UserPage;

const Container = styled.section`
	width: 100%;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
