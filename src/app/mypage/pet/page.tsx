import React from 'react';
import PetPage from '@/component/MyPage/pet';
import {IPet} from '@/types/common';

const pets: IPet[] = [
	{
		petId: 1,
		petName: '강아지1',
		petGender: 'MALE',
		petBirth: '2011-02-13',
		petSpecies: 'DOG',
		speciesDetail: '말티즈',
		imgUrl: '',
		content: '갈색 말티즈',
	},
	{
		petId: 2,
		petName: '강아지2',
		petGender: 'FEMALE',
		petBirth: '2014-02-13',
		petSpecies: 'DOG',
		speciesDetail: '푸들',
		imgUrl: '',
		content: '회색 푸들',
	},
	{
		petId: 3,
		petName: '고양이1',
		petGender: 'FEMALE',
		petBirth: '2020-01-17',
		petSpecies: 'CAT',
		speciesDetail: '길고양이',
		imgUrl: '',
		content: '흰색 길고양이',
	},
];

function Pet() {
	return <PetPage pets={pets} />;
}

export default Pet;
