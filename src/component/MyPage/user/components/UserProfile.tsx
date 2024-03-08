'use client';
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
		<section className='w-full mt-[40px]'>
			<div className='w-full flex justify-between'>
				<SectionTitle title='My Profile' />
				<button
					className='w-[72px] h-[38px] rounded-[4px] bg-wh border border-secondary text-secondary text-[15px] cursor-pointer'
					onClick={handleEditToggle}
				>
					{editToggle ? '완료' : '정보수정'}
				</button>
			</div>
			<div className='w-full flex mt-[80px] mb-[48px]'>
				<UserProfileImage
					profileURL={userInput?.profileURL}
					onChangeProfileImage={handleUploadFile}
					editable={editToggle}
				/>
				<UserProfileInput userInput={userInput} editable={editToggle} />
			</div>
		</section>
	);
}
export default UserProfile;
