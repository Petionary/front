'use client';

import styled from 'styled-components';
import UserInfo from './components/UserProfile';
import UserPlace from './components/UserPlace';
import {IUser} from '@/types/common';
import UserProfile from './components/UserProfile';

interface IProps {
	user: IUser;
}

function UserPage({user}: IProps) {
	return (
		<Container>
			<UserProfile user={user} />
			<UserPlace />
		</Container>
	);
}

export default UserPage;

const Container = styled.section`
	width: 100%;
	padding: 0 0 0 83px;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	&::-webkit-scrollbar {
		display: none;
	}
`;
