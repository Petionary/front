import React from 'react';
import {ArrowIcon} from '@/icons/default';
import {ComponentPropsWithoutRef} from 'react';

interface IProps extends ComponentPropsWithoutRef<'select'> {
	label: string;
}

const data = {
	optionText: {
		petGender: {
			MALE: '남',
			FEMALE: '여',
		},
		petSpecies: {
			DOG: '반려견',
			CAT: '반려묘',
			OTHER: '기타',
		},
	},
	options: {
		petGender: ['MALE', 'FEMALE'],
		petSpecies: ['DOG', 'CAT', 'OTHER'],
	},
};

function Dropdown({label, ...rest}: IProps) {
	console.log('dds');
	return (
		<label className='relative flex flex-col justify-between mx-[50px] mb-[56px] pb-[13px] text-[15px] border-b border-gray_40'>
			<p>{label}</p>
			<select className='w-[93px] px-[15px] outline-none' {...rest}>
				<option disabled>-</option>
				{data.options[rest.name as string]?.map(
					(option: string, idx: number) => (
						<option key={idx} value={option}>
							{data.optionText[rest.name as string][option]}
						</option>
					),
				)}
			</select>
			{!rest.disabled && (
				<ArrowIcon className='absolute bottom-[20px] right-[8px]' />
			)}
		</label>
	);
}

export default Dropdown;
