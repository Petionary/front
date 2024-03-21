import {getPetDetailApi} from './api';

export const petQueryKeys = {
	all: ['pet'] as const,
	detail: (petId: number) => [...petQueryKeys.all, petId] as const,
};

export const petQueryOptions = {
	all: () => ({}),
	detail: (petId: number) => ({
		queryKey: petQueryKeys.detail(petId),
		queryOptions: () => getPetDetailApi(petId),
	}),
};
