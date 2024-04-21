/* eslint-disable no-unused-vars */
import SearchInput from '@/component/input/SearchInput';
import {ChangeEvent} from 'react';
import CurrentLocation from '../../common/location/CurrentLocation';
import OrderOptions from '../../common/order/OrderOptions';
import {IPlaceParams} from '@/types/common';

interface IProps {
	params: IPlaceParams;
	onChangeParam: (e: ChangeEvent<HTMLInputElement>) => void;
}

function PlaceListToolBox({params, onChangeParam}: IProps) {
	return (
		<div className='p-[20px] my-[10px]'>
			<SearchInput
				name='search'
				value={params.search}
				onChange={onChangeParam}
			/>
			<CurrentLocation />
			<OrderOptions
				onClickOrderOption={onChangeParam}
				order={params.order}
			/>
		</div>
	);
}

export default PlaceListToolBox;
