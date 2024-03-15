import React from 'react';
import {MapIcon} from '@/icons/default';

interface IProps {
	title: string;
}

function SectionTitle({title}: IProps) {
	return (
		<div className='flex text-[24px] font-[700] text-gray_90 items-center'>
			<MapIcon className='w-[40px] mr-[8px] fill-primary' />
			<h2>{title}</h2>
		</div>
	);
}

export default SectionTitle;
