export const oPageKey = {
	best: 'best',
	new: 'new',
	report: 'report',
};

export const oPetGender = [
	{value: 'MALE', label: '남'},
	{value: 'FEMALE', label: '여'},
];

export const oPetSpecies = [
	{value: 'DOG', label: '강아지'},
	{value: 'CAT', label: '고양이'},
	{value: 'OTHER', label: '기타'},
];

export const oOrderOptions = [
	{
		label: '거리순',
		value: 'distance' as const,
	},
	{
		label: '평점높은순',
		value: 'rate' as const,
	},
	{
		label: '리뷰많은순',
		value: 'review' as const,
	},
];

export const oFilterOptions = [
	{
		value: 'all',
		label: '전체',
	},
	{
		value: 'cafe',
		label: '카페',
	},
	{
		value: 'reataurant',
		label: '음식점',
	},
	{
		value: 'hotel',
		label: '호텔',
	},
	{
		value: 'park',
		label: '공원',
	},
	{
		value: 'salon',
		label: '미용실',
	},
	{
		value: 'hospital',
		label: '병원',
	},
	{
		value: 'etc',
		label: '기타',
	},
];
