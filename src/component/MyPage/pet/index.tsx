import {PetIcon} from '@/icons/default';
import SectionTitle from '../common/SectionTitle';
import PetAddButton from './components/PetAddButton';
import {IPet} from '@/types/common';

interface IProps {
	pets: IPet[];
}

function PetPage({pets}: IProps) {
	return (
		<section className='w-full pl-[83px] overflow-y-scroll flex flex-col'>
			<section className='w-full mt-[40px]'>
				<SectionTitle title='My Pet' />
				<section className='mt-[82px] grid grid-cols-auto-fill-pet gap-[48px] overflow-y-scroll'>
					{pets?.map((pet) => (
						<div className='w-[236px] h-[342px] relative flex flex-col justify-between items-center py-[38px] rounded-[4px] bg-white'>
							<div className='w-[160px] h-[160px] rounded-full bg-[#D9D9D9] flex justify-center items-center'>
								<PetIcon className='fill-gray_20' />
							</div>
							<p>{pet.name}</p>
							<p>{pet.gender}</p>
							<p>{pet.species}</p>
							<p>{pet.birthDate}</p>
						</div>
					))}

					<PetAddButton />
				</section>
			</section>
		</section>
	);
}

export default PetPage;
