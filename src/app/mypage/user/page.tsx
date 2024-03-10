import UserPage from '@/component/MyPage/user';
import {IUser} from '@/types/common';

const user: IUser = {
	email: 'admin.@admin.com',
	name: 'admin',
	nickname: 'user1',
	contact: '010-1234-5678',
	profileURL: '',
};

function User() {
	return <UserPage user={user} />;
}

export default User;
