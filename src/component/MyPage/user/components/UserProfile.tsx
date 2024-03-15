'use client';
import React, {useEffect, useState} from 'react';

import {IUser} from '@/types/common';
import useUploadFile from '@/hooks/useUploadFile';

import SectionTitle from '../../common/SectionTitle';
import UserProfileInput from './UserProfileInput';
import ProfileImage from '../../common/ProfileImage';

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
				image: uploadedFile[uploadedFile.length - 1] as string,
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
				<ProfileImage
					profileURL={userInput?.image}
					onChangeProfileImage={handleUploadFile}
					editable={editToggle}
					type='user'
				/>
				<UserProfileInput userInput={userInput} editable={editToggle} />
			</div>
		</section>
	);
}
export default UserProfile;
