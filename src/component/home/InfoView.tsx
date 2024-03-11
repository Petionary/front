import React from 'react';

const data = {
	allView: '전체보기',
};

type TProps = {
	title: string;
	description: string;
};
function InfoView({title, description}: TProps) {
	return (
		<div className={'mb-[40px]'}>
			<div className={'flex items-center mb-[6px]'}>
				<h3
					className={'text-[34px] font-[700] mr-[24px] text-gray_100'}
				>
					{title}
				</h3>
				<p
					className={
						'text-[12px] font-[400] text-gray_70 border-b border-gray_70'
					}
				>
					{data.allView}
				</p>
			</div>
			<p className={'text-[16px] font-[600] text-gray_60'}>
				{description}
			</p>
		</div>
	);
}

export default InfoView;
