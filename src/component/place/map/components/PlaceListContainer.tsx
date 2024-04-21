'use client';
import {useState} from 'react';
import PlaceDetailContainer from './PlaceDetailContainer';
import PlaceListWrapper from './PlaceListWrapper';
import PlaceListToolBox from './PlaceListToolBox';

import FilterBar from '../../common/filter/FilterBar';

import usePlaceParam from '@/hooks/usePlaceParam';

function PlaceListContainer() {
	const [detailToggle, setDetailToggle] = useState(false);
	const [params, handlePlaceParams] = usePlaceParam();

	return (
		<>
			<div className='absolute h-full flex items-center z-10'>
				<div className='relative w-[400px] h-full bg-white z-20 flex flex-col'>
					<PlaceListToolBox
						params={params}
						onChangeParam={handlePlaceParams}
					/>
					<PlaceListWrapper
						onClickPlaceCard={() => setDetailToggle(true)}
					/>
				</div>
				<PlaceDetailContainer
					openToggle={detailToggle}
					onClickCancel={() => setDetailToggle(false)}
				/>
			</div>
			<FilterBar
				filter={params.filter}
				onChangeParam={handlePlaceParams}
			/>
		</>
	);
}

export default PlaceListContainer;
