import React, {MouseEventHandler} from 'react';
import Title from '@/component/modal/Title';

type TProps = {
	type: string;
	onClickBack: MouseEventHandler<HTMLButtonElement>;
	onClickNext: MouseEventHandler<HTMLButtonElement>;
};

function NameEntryComponent({type, onClickBack, onClickNext}: TProps) {
	return (
		<div className={'h-full flex flex-col justify-around items-center'}>
			<Title type={type} />
			<div className={'w-64 mb-32'}>
				<p className={'font-bold'}>닉네임</p>
				<input
					type={'text'}
					placeholder={'닉네임을 입력하세요'}
					className={'text-sm w-full border-b-2 border-primary p-2'}
				/>
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

export default NameEntryComponent;
