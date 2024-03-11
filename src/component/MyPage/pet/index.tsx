import React from 'react';
import SectionTitle from '../common/SectionTitle';
import PetAddButton from './components/PetAddButton';
import {IPet} from '@/types/common';
import PetCard from './components/PetCard';

interface IProps {
	pets: IPet[];
}

function PetPage({pets}: IProps) {
	return (
		<section className='w-full pl-[83px] overflow-y-scroll flex flex-col'>
			<div className='w-full mt-[40px]'>
				<SectionTitle title='My Pet' />
				<div className='mt-[40px] grid grid-cols-auto-fill-pet gap-[48px] overflow-y-scroll'>
					{pets?.map((pet, idx) => (
						<PetCard key={idx} pet={pet} />
					))}
					<PetAddButton />
				</div>
			</div>
		</section>
	);
}

export default PetPage;
