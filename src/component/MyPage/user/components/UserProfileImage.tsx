import {PencilIcon, UserIcon} from '@/icons/default';
import {Icon, iType} from '@/style/icon';
import {PRIMARY_COLOR} from '@/style/theme';
import Image from 'next/image';
import {ChangeEvent} from 'react';
import styled from 'styled-components';

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
		<_ProfileImageContainer>
			<_ProfileInput
				type='file'
				accept='image'
				name='profileUrl'
				onChange={onChangeProfileImage}
				disabled={!editable}
			/>
			<_Image>
				{profileURL ? (
					<Image
						width={160}
						height={160}
						src={profileURL}
						alt='user'
					/>
				) : (
					<Icon size={'78px'} iType={iType.white}>
						{UserIcon}
					</Icon>
				)}
			</_Image>
			<_EditButton>
				<Icon size={'14.4px'} iType={iType.white}>
					{PencilIcon}
				</Icon>
			</_EditButton>
		</_ProfileImageContainer>
	);
}

export default UserProfileImage;

const _ProfileImageContainer = styled.label`
	position: relative;
	width: 160px;
	height: 160px;
`;

const _ProfileInput = styled.input`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
`;

const _Image = styled.label`
	width: 160px;
	height: 160px;
	background-color: #d9d9d9;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	position: relative;
	overflow: hidden;
`;

const _EditButton = styled.div`
	width: 28.8px;
	height: 28.8px;
	background-color: ${PRIMARY_COLOR};
	border-radius: 8px;
	display: flex;
	position: absolute;
	bottom: 11px;
	right: 14px;
	justify-content: center;
`;
