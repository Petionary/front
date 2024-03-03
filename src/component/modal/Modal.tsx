'use client';
import React, {useState} from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Image from 'next/image';

// // 모달의 기본 스타일을 설정합니다.
Modal.setAppElement('#yourAppElement');

const Button = styled.button`
	/* 버튼 스타일을 여기에 추가하세요. */
`;

type ModalProps = {
	height?: string;
	color?: string;
};

const MyModal: React.FC<ModalProps> = ({height, color = 'black'}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<div>
			<Button onClick={openModal}>Open Modal</Button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'
				ariaHideApp={false}
			>
				<Image
					src={'/pet-img1.png'}
					alt={'강아지 그림'}
					width={413}
					height={750}
				/>
				<h2>Hello</h2>
				<button onClick={closeModal}>close</button>
				<div>I am a modal</div>
			</Modal>
		</div>
	);
};

export default MyModal;

const customStyles = {
	content: {
		top: '50%',
		maxWidth: '814px',
		width: '80%',
		height: '750px',
		padding: 0,
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '120px, 0px, 0px, 8px',
		border: '1px solid red', //임시 로직입니다.
	},
};

// const CustomModal = styled(Modal)`
// 	.ReactModal__Content {
// 		width: 100px;
// 	}
// `;
