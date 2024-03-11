'use client';
import React from 'react';
import {PetIcon} from '@/icons/default';
import {IPet} from '@/types/common';
import {useRouter} from 'next/navigation';

interface IProps {
	pet: IPet;
}

const data = {
	genderIcon: {
		MALE: '♂',
		FEMALE: '♀',
	},
	speciesIcon: {
		DOG: '🐶',
		CAT: '🐱',
		OTHER: '👀',
	},
};

function PetCard({pet}: IProps) {
	const {push} = useRouter();
	return (
		<div
			onClick={() => push(`/mypage/pet/${pet.petId}`)}
			className='cursor-pointer w-[236px] h-[342px] relative flex flex-col justify-between items-center py-[38px] rounded-[4px] bg-white'
		>
			<div className='w-[160px] h-[160px] rounded-full bg-[#D9D9D9] flex justify-center items-center'>
				<PetIcon className='fill-gray_20' />
			</div>
			<p className='text-[20px] font-semibold '>{pet.petName}</p>
			<div className='flex w-full items-center justify-evenly px-[38px]'>
				<p>{data.speciesIcon[pet.petSpecies]}</p>
				<p>{pet.speciesDetail}</p>
				<p>{data.genderIcon[pet.petGender]}</p>
			</div>
			<p>{pet.petBirth}</p>
		</div>
	);
}

export default PetCard;
