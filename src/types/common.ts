export interface IUser {
	accountId: number;
	email: string;
	name: string;
	nickname: string;
	phoneNumber: string;
	image: string;
}

export interface IPet {
	petId?: number;
	createAt?: string;
	updateAt?: string;
	petName: string;
	imgUrl: string;
	petSpecies: 'DOG' | 'CAT' | 'OTHER';
	petBirth: string;
	petGender: 'MALE' | 'FEMALE';
	speciesDetail: string;
	content: string;
}
