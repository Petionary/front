interface IProps {
	size?: 'sm' | 'lg';
}

const data = {
	width: {
		sm: 'w-[350px]',
		lg: 'w-[560px]',
	},
};

function SearchInput({size = 'sm'}: IProps) {
	return (
		<div>
			<input
				className={`border-b border-primary h-[48px] ${data.width[size]} px-[10px] outline-none`}
			/>
		</div>
	);
}

export default SearchInput;
