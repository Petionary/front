import {LogoutIcon, MyPageIcon} from '@/icons/default';

export const lMenu = {
	home: {
		value: 'home',
		label: '홈',
	},
	list: {
		value: 'list',
		label: '리스트',
	},
	map: {
		value: 'map',
		label: '지도',
	},
};

export const lPanel = {
	myPage: {
		value: 'my',
		label: 'MY',
		type: 'login',
		icon: MyPageIcon,
	},
	logout: {
		value: 'logout',
		label: 'LOGOUT',
		type: 'login',
		icon: LogoutIcon,
	},
	login: {
		value: 'login',
		label: 'Login',
		type: 'logout',
		icon: LogoutIcon,
	},
};
