import {ChangeEvent, ComponentPropsWithoutRef} from 'react';

interface IProps extends ComponentPropsWithoutRef<'input'> {
	label: string;
	filter: string[];
	// eslint-disable-next-line no-unused-vars
	onClickFilterItem: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FilterItem({
	label,
	value,
	filter,
	onClickFilterItem,
	...rest
}: IProps) {
	return (
		<label
			className={`w-[70px] h-[70px] flex flex-col items-center justify-center cursor-pointer border-b  ${
				filter?.includes(value as string)
					? 'border-primary'
					: 'border-white'
			}`}
		>
			<input
				type='checkbox'
				className='sr-only'
				name='filter'
				value={value}
				onChange={onClickFilterItem}
				{...rest}
			/>
			<span className='w-[30px] h-[30px] bg-gray_50' />
			<span className='text-[14px]'>{label}</span>
		</label>
	);
}

export default FilterItem;
