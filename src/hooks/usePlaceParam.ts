import {IPlaceParams} from '@/types/common';
import {ChangeEvent, useEffect, useState} from 'react';

const usePlaceParam: () => [
	IPlaceParams,
	// eslint-disable-next-line no-unused-vars
	(e: ChangeEvent<HTMLInputElement>) => void,
] = () => {
	const [params, setParams] = useState<IPlaceParams>({
		search: '',
		order: 'distance',
		filter: ['all'],
	});

	const handlePlaceParams = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;

		if (name === 'filter') {
			if (value === 'all') {
				setParams({...params, filter: ['all']});
			} else {
				if (params.filter.includes('all')) {
					setParams({
						...params,
						filter: [value],
					});
				} else if (params.filter.includes(value)) {
					setParams({
						...params,
						filter: params.filter.filter((item) => item !== value),
					});
				} else {
					setParams({
						...params,
						filter: [...params.filter, value],
					});
				}
			}
		} else {
			setParams({...params, [name]: value});
		}
	};

	useEffect(() => {
		if (params.filter.length === 0) {
			setParams({...params, filter: ['all']});
		}
	}, [params]);

	return [params, handlePlaceParams];
};

export default usePlaceParam;
