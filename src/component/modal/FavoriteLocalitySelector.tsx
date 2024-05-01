import React, {MouseEventHandler} from 'react';
import Title from '@/component/modal/Title';
import {XShapeIcon} from '@/icons/default';

type TProps = {
	type: string;
	onClickBack: MouseEventHandler<HTMLButtonElement>;
	onClickNext: MouseEventHandler<HTMLButtonElement>;
};

function FavoriteLocalitySelector({type, onClickBack, onClickNext}: TProps) {
	return (
		<div className={'h-full flex flex-col justify-around items-center'}>
			<Title type={type} />
			<div className={'mb-32'}>
				<div
					className={
						'flex items-center border border-primary rounded-[4px] text-[15px] font-bold text-primary p-3'
					}
				>
					서울시 송파구
					<XShapeIcon className={'ml-2'} />
				</div>
			</div>
			<div className={'w-full flex justify-around px-8'}>
				<button
					className={
						'w-20 h-14 border border-primary rounded-[2px] text-[15px] font-bold text-primary'
					}
					onClick={onClickBack}
				>
					Back
				</button>
				<button
					className={
						'w-20 h-14 border border-primary bg-primary rounded-[2px] text-[15px] font-bold text-white'
					}
					onClick={onClickNext}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default FavoriteLocalitySelector;
