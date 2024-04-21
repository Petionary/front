import {ComponentPropsWithoutRef} from 'react';

interface IProps extends ComponentPropsWithoutRef<'input'> {
	text: string;
}

function Chip({text, name, value, ...rest}: IProps) {
	const cursor = rest.onChange && 'cursor-pointer';
	const backgroundColor = rest.checked ? 'bg-secondary' : 'bg-primary';
	return (
		<label
			className={`border px-[15px] py-1 text-[14px] rounded-full text-white mr-[5px] ${cursor} ${backgroundColor}`}
		>
			<input
				type='radio'
				className='sr-only'
				name={name}
				value={value}
				{...rest}
			/>
			<span>{text}</span>
		</label>
	);
}

export default Chip;
