interface IProps {
	text: string;
	onClick?: () => void;
}

function Chip({text, onClick}: IProps) {
	return (
		<span
			onClick={onClick}
			className='border px-[15px] py-1 text-[14px] rounded-full bg-primary text-white mr-[5px]'
		>
			{text}
		</span>
	);
}

export default Chip;
