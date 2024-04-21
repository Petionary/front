import {ComponentPropsWithoutRef} from 'react';

interface IProps extends ComponentPropsWithoutRef<'input'> {
	width?: 'sm' | 'lg';
}

const data = {
	sm: 'w-[350px]',
	lg: 'w-[560px]',
};

function SearchInput({width = 'sm', onChange, name, value}: IProps) {
	return (
		<div>
			<input
				name={name}
				value={value}
				onChange={onChange}
				autoComplete='off'
				className={`border-b border-primary h-[48px] ${data[width]} px-[10px] outline-none`}
			/>
		</div>
	);
}

export default SearchInput;
