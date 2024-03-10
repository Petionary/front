import {ComponentPropsWithoutRef} from 'react';
import styled from 'styled-components';

interface IProps extends ComponentPropsWithoutRef<'input'> {
	label: string;
}

function Input({label, ...rest}: IProps) {
	return (
		<label className='flex flex-col justify-between mx-[50px] mb-[56px] text-[15px]'>
			<p className='text-gray_90'>{label}</p>
			<input
				className='w-[225px] h-[44px] px-[15px] border-b text-gray_60 border-gray_40 outline-none bg-transparent'
				{...rest}
			/>
		</label>
	);
}

export default Input;
