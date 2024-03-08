import {PencilIcon, UserIcon} from '@/icons/default';
import Image from 'next/image';
import {ChangeEvent} from 'react';

interface IProps {
	profileURL: string;
	editable: boolean;
	onChangeProfileImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

function UserProfileImage({
	editable,
	profileURL,
	onChangeProfileImage,
}: IProps) {
	return (
		<label className='relative w-[160px] h-[160px]'>
			<input
				type='file'
				accept='image'
				name='profileUrl'
				onChange={onChangeProfileImage}
				disabled={!editable}
				className='sr-only'
			/>
			<div className='w-[160px] h-[160px] bg-[#d9d9d9] rounded-full flex justify-center items-center overflow-hidden'>
				{profileURL ? (
					<Image
						width={160}
						height={160}
						src={profileURL}
						alt='user'
					/>
				) : (
					<UserIcon className='w-[78px] fill-gray_20' />
				)}
			</div>
			<div className='w-[28.8px] h-[28.8px] bg-primary rounded-[8px] flex absolute bottom-[11px] right-[14px] justify-center items-center'>
				{/* <Icon size={'14.4px'} iType={iType.white}> */}
				<PencilIcon className='w-[14.4px] fill-white' />
				{/* </Icon> */}
			</div>
		</label>
	);
}

export default UserProfileImage;
