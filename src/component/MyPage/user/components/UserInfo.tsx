import styled from 'styled-components';
import SectionTitle from '../../common/SectionTitle';
import Input from '../../common/Input';
import {Icon, iType} from '@/style/icon';
import {UserIcon} from '@/icons/default';
import {IUser} from '@/types/common';
import Image from 'next/image';

interface IProps {
	user: IUser;
}

function UserInfo({user}: IProps) {
	return (
		<SectionContainer>
			<SectionTitle title='My Profile' />
			<Wrapper>
				{user?.profileURL ? (
					<Image
						width={160}
						height={160}
						src={user?.profileURL}
						alt='user'
					/>
				) : (
					<_IconContainer>
						<Icon size={'78px'} iType={iType.white}>
							{UserIcon}
						</Icon>
					</_IconContainer>
				)}
				<InputWrapper>
					<Input label='이메일' />
					<Input label='전화번호' />
					<Input label='이름' />
					<Input label='별명' />
				</InputWrapper>
			</Wrapper>
		</SectionContainer>
	);
}
export default UserInfo;

const SectionContainer = styled.section`
	width: 100%;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 600px;
`;

const _IconContainer = styled.div`
	width: 160px;
	height: 160px;
	background-color: #d9d9d9;
	border-radius: 100%;
	display: flex;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	margin: 100px 0;
	justify-content: space-evenly;
`;
