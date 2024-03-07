import {useEffect, useState} from 'react';
import styled from 'styled-components';

import {IUser} from '@/types/common';
import useUploadFile from '@/hooks/useUploadFile';

import SectionTitle from '../../common/SectionTitle';
import UserProfileImage from './UserProfileImage';
import UserProfileInput from './UserProfileInput';

interface IProps {
	user: IUser;
}

function UserProfile({user}: IProps) {
	const [userInput, setUserInput] = useState<IUser>(user);
	const [uploadedFile, handleUploadFile] = useUploadFile();
	const [editToggle, setEditToggle] = useState(false);

	const handleEditToggle = () => {
		setEditToggle(!editToggle);
	};

	useEffect(() => {
		if (uploadedFile.length)
			setUserInput({
				...userInput,
				profileURL: uploadedFile[uploadedFile.length - 1] as string,
			});
	}, [uploadedFile.length]);

	return (
		<_SectionContainer>
			<_FlexWrapper>
				<SectionTitle title='My Profile' />
				<_EditButton onClick={handleEditToggle}>
					{editToggle ? '완료' : '정보수정'}
				</_EditButton>
			</_FlexWrapper>
			<_Content>
				<UserProfileImage
					profileURL={userInput?.profileURL}
					onChangeProfileImage={handleUploadFile}
					editable={editToggle}
				/>
				<UserProfileInput userInput={userInput} editable={editToggle} />
			</_Content>
		</_SectionContainer>
	);
}
export default UserProfile;

const _SectionContainer = styled.section`
	width: 100%;
	margin-top: 40px;
`;

const _Content = styled.div`
	width: 100%;
	display: flex;
	margin: 80px 0 48px 0;
`;

const _FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const _EditButton = styled.button`
	width: 72px;
	height: 38px;
	border-radius: 4px;
	background-color: white;
	border: 1px solid #ff9666;
	color: #ff9666;
	font-size: 15px;
	cursor: pointer;
`;
