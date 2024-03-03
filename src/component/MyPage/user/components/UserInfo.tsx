'use client';

import styled from 'styled-components';
import Input from '../../common/Input';
import SectionTitle from '../../common/SectionTitle';
import Image from 'next/image';
import {useState} from 'react';
import {GRAY_COLOR_10, GRAY_COLOR_40} from '@/style/theme';

function UserInfo() {
	const [editToggle, setEditToggle] = useState(false);

	return (
		<Container>
			<SectionWrapper>
				<SectionTitle title='My Profile' />
			</SectionWrapper>
			{/* 이미지 */}
			{/* 인풋 */}
			{/* 관심지역 */}
			<SectionWrapper>
				<SectionTitle title='My Place' />
			</SectionWrapper>
		</Container>
	);
}

export default UserInfo;

const Container = styled.section`
	width: calc(100% - 180px);
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 30px 100px;
	border: 1px solid ${GRAY_COLOR_40};
	width: 80%;
	background-color: ${GRAY_COLOR_10};
`;
