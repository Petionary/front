import React from 'react';
import UserPlace from './components/UserPlace';
import UserProfile from './components/UserProfile';
import {IUser} from '../../../types/common';

interface IProps {
	user: IUser;
}

function UserPage({user}: IProps) {
	return (
		<section className='w-full pl-[83px] overflow-y-scroll flex flex-col'>
			<UserProfile user={user} />
			<UserPlace />
		</section>
	);
}

export default UserPage;
