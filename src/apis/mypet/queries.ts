import {getMyPetDetailApi} from './api';

export const mypetQueryKeys = {
	all: ['mypet'] as const,
	detail: (petId: number) => [...mypetQueryKeys.all, petId] as const,
};

export const mypetQueryOptions = {
	all: () => ({}),
	detail: (petId: number) => ({
		queryKey: mypetQueryKeys.detail(petId),
		queryOptions: () => getMyPetDetailApi(petId),
	}),
};
