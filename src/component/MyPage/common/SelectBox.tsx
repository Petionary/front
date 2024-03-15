import React, {ChangeEvent} from 'react';
import {ArrowIcon} from '@/icons/default';
import {IOption} from '@/types/common';

interface IProps {
	label: string;
	name: string;
	value: string;
	options: IOption[];
	disabled?: boolean;
	// eslint-disable-next-line no-unused-vars
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function SelectBox({label, name, value, onChange, disabled, options}: IProps) {
	return (
		<label className='relative flex flex-col justify-between mx-[50px] mb-[56px] pb-[13px] text-[15px] border-b border-gray_40'>
			<p>{label}</p>
			<select
				className='w-[93px] px-[15px] outline-none'
				name={name}
				value={value}
				disabled={disabled}
				onChange={onChange}
			>
				<option disabled>-</option>
				{options.map((option, idx) => (
					<option key={idx} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{!disabled && (
				<ArrowIcon className='absolute bottom-[20px] right-[8px]' />
			)}
		</label>
	);
}

export default SelectBox;
