'use client';
import React from 'react';
import {PetIcon, PlusIcon} from '@/icons/default';
import {useRouter} from 'next/navigation';

function PetAddButton() {
	const {push} = useRouter();
	return (
		<div
			onClick={() => push('/mypage/pet/new')}
			className='w-[236px] h-[342px] relative flex flex-col justify-between items-center py-[38px] rounded-[4px] overflow-hidden cursor-pointer'
		>
			<div className='w-[160px] h-[160px] rounded-full bg-[#D9D9D9] flex justify-center items-center'>
				<PetIcon className='fill-gray_20' />
			</div>
			<div className='w-full h-full bg-gray_90 opacity-40 absolute top-0' />
			<div className='flex flex-col items-center absolute top-[50%]'>
				<PlusIcon className='fill-pri0mary w-[20px] mb-[10px]' />
				<p className='text-[14px] text-primary'>새 반려동물 등록</p>
			</div>
		</div>
	);
}

export default PetAddButton;
