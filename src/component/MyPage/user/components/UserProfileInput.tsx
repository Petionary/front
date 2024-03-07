import styled from 'styled-components';
import Input from '../../common/Input';
import {IUser} from '@/types/common';

interface IProp {
	userInput: IUser;
	editable: boolean;
}

function UserProfileInput({editable, userInput}: IProp) {
	return (
		<_Wrapper>
			<div>
				<Input label='이메일' value={userInput.email} disabled={true} />
				<Input
					label='별명'
					value={userInput.nickname}
					disabled={!editable}
				/>
			</div>
			<div>
				<Input label='이름' value={userInput.name} disabled={true} />
				<Input
					label='전화번호'
					value={userInput.contact}
					disabled={!editable}
				/>
			</div>
		</_Wrapper>
	);
}

export default UserProfileInput;

const _Wrapper = styled.div`
	display: flex;
	margin: auto;
`;
