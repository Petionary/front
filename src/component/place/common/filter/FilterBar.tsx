import {oFilterOptions} from '@/utils/option';
import FilterItem from './FilterItem';
import {ChangeEvent} from 'react';

interface IProps {
	filter: string[];
	// eslint-disable-next-line no-unused-vars
	onChangeParam: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FilterBar({filter, onChangeParam}: IProps) {
	return (
		<div className={`bg-white flex absolute z-10 right-8 top-2`}>
			{oFilterOptions.map((option, index) => (
				<FilterItem
					key={`${index}_${option.value}`}
					label={option.label}
					value={option.value}
					filter={filter}
					onChange={onChangeParam}
					onClickFilterItem={onChangeParam}
				/>
			))}
		</div>
	);
}

export default FilterBar;
