'use client';
import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import NameEntryComponent from '@/component/modal/NameEntryComponent';
import FavoriteLocalitySelector from '@/component/modal/FavoriteLocalitySelector';
import WelcomeMessageDisplay from '@/component/modal/WelcomeMessageDisplay';

export const modalType = {
	name: 'name',
	location: 'location',
	welcome: 'welcome',
};

function MyModal() {
	const [modalIsOpen, setModalIsOpen] = useState(true);
	const [modalPage, setModalPage] = useState('name');

	const onClickClose = () => {
		setModalIsOpen(false);
	};

	const onClickNext = () => {
		switch (modalPage) {
			case modalType.name:
				setModalPage(modalType.location);
				break;
			case modalType.location:
				setModalPage(modalType.welcome);
				break;
			default:
				break;
		}
	};

	const onClickBack = () => {
		switch (modalPage) {
			case modalType.welcome:
				setModalPage(modalType.location);
				break;
			case modalType.location:
				setModalPage(modalType.name);
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				style={customStyles}
				ariaHideApp={false}
				shouldCloseOnOverlayClick={false}
			>
				<div className={'flex'}>
					<aside>
						<Image
							src={'/pet-img1.png'}
							alt={'강아지 그림'}
							width={413}
							height={30}
						/>
					</aside>
					<section className={'w-1/2'}>
						{modalPage === modalType.name && (
							<NameEntryComponent
								type={modalPage}
								onClickBack={onClickBack}
								onClickNext={onClickNext}
							/>
						)}
						{modalPage === modalType.location && (
							<FavoriteLocalitySelector
								type={modalPage}
								onClickBack={onClickBack}
								onClickNext={onClickNext}
							/>
						)}
						{modalPage === modalType.welcome && (
							<WelcomeMessageDisplay
								type={modalPage}
								onClickClose={onClickClose}
							/>
						)}
					</section>
				</div>
			</Modal>
		</div>
	);
}

export default MyModal;

const customStyles = {
	overlay: {
		backgroundColor: ' rgba(0, 0, 0, 0.4)',
	},
	content: {
		top: '50%',
		width: '800px',
		padding: 0,
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		borderRadius: '120px 10px 10px 10px',
		transform: 'translate(-50%, -50%)',
		overflow: 'hidden',
		boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
	},
};
