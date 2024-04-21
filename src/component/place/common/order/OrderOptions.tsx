import Chip from '@/component/chip/Chip';
import {oOrderOptions} from '@/utils/option';
import {ChangeEvent} from 'react';
import {TOrderOption} from '@/types/common';

interface IProps {
	order: TOrderOption;
	// eslint-disable-next-line no-unused-vars
	onClickOrderOption: (e: ChangeEvent<HTMLInputElement>) => void;
}

function OrderOptions({order, onClickOrderOption}: IProps) {
	return (
		<div className='flex'>
			{oOrderOptions.map((option, index) => (
				<Chip
					key={`${index}_${option.value}`}
					text={option.label}
					name='order'
					value={option.value}
					checked={order === option.value}
					onChange={onClickOrderOption}
				/>
			))}
		</div>
	);
}

export default OrderOptions;
