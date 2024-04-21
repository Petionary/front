import React from 'react';

import {IUser} from '../../../../types/common';
import Input from '../../common/Input';

interface IProp {
	userInput: IUser;
	editable: boolean;
}

function UserProfileInput({editable, userInput}: IProp) {
	return (
		<div className='flex m-auto'>
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
					value={userInput.phoneNumber}
					disabled={!editable}
				/>
			</div>
		</div>
	);
}

export default UserProfileInput;
