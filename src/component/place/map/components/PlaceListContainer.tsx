'use client';
import {useState} from 'react';
import PlaceDetailContainer from './PlaceDetailContainer';
import PlaceListWrapper from './PlaceListWrapper';
import PlaceListToolBox from './PlaceListToolBox';
import PlaceListOpenButton from './PlaceListOpenButton';

interface IProps {
	openToggle: boolean;
	onClickOpen: () => void;
}

function PlaceListContainer({openToggle, onClickOpen}: IProps) {
	const [detailToggle, setDetailToggle] = useState(false);
	const openAnimation = openToggle ? 'translate-x-0' : '-translate-x-[400px]';
	return (
		<div
			className={`absolute h-full flex items-center duration-500 z-10 ${openAnimation}`}
		>
			<div className='relative w-[400px] h-full bg-white z-20 flex flex-col'>
				<PlaceListToolBox />
				<span onClick={() => setDetailToggle(true)}>open</span>
				<PlaceListWrapper />
			</div>
			{!detailToggle && (
				<PlaceListOpenButton
					openToggle={openToggle}
					onClickOpen={onClickOpen}
				/>
			)}
			<PlaceDetailContainer
				openToggle={detailToggle}
				onClickCancel={() => setDetailToggle(false)}
			/>
		</div>
	);
}

export default PlaceListContainer;
