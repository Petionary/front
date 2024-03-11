import React from 'react';
import {ComponentPropsWithoutRef} from 'react';

interface IProps extends ComponentPropsWithoutRef<'input'> {
	width?: 'sm' | 'md';
	label: string;
}

function Input({label, width = 'md', ...rest}: IProps) {
	const inputWidth = width === 'sm' ? 'w-[93px]' : 'w-[225px]';
	return (
		<label className='flex flex-col justify-between mx-[50px] mb-[56px] text-[15px]'>
			<p className='text-gray_90'>{label}</p>
			<input
				className={`${inputWidth} h-[44px] px-[15px] border-b text-gray_60 border-gray_40 outline-none bg-transparent`}
				{...rest}
			/>
		</label>
	);
}

export default Input;
