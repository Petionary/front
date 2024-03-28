import {ArrowIcon} from '@/icons/default';

interface IProps {
	openToggle: boolean;
	onClickOpen: () => void;
}

function PlaceListOpenButton({openToggle, onClickOpen}: IProps) {
	const openAnimation = openToggle ? 'rotate-90' : '-rotate-90';

	return (
		<button
			className='relative w-[20px] h-full z-20 bg-white border-x'
			onClick={onClickOpen}
		>
			<ArrowIcon className={`${openAnimation} duration-500 mx-auto`} />
		</button>
	);
}

export default PlaceListOpenButton;
