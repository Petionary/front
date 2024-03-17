import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

/**************************************************
 * OAuth 로그인 시 토큰값을 저장하기 위한 store 입니다.
 **************************************************/
const sessionStorage =
	typeof window !== 'undefined' ? window.sessionStorage : undefined;

const {persistAtom} = recoilPersist({
	key: 'recoil-persist',
	storage: sessionStorage,
});

export const authState = atom({
	key: 'auth',
	default: {},
	effects_UNSTABLE: [persistAtom],
});
