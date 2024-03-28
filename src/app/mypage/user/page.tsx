import React from 'react';
import UserPage from '@/component/mypage/user';
import {IUser} from '@/types/common';

const user: IUser = {
	accountId: 1,
	email: 'admin.@admin.com',
	name: 'admin',
	nickname: 'user1',
	phoneNumber: '010-1234-5678',
	image: '',
};

function User() {
	return <UserPage user={user} />;
}

export default User;
