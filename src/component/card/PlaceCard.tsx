import React from 'react';

function PlaceCard() {
	return (
		<div className={'w-[250px] h-[280px]'}>
			<div className={'w-[100%] h-[120px] bg-gray_50'}>
				이미지 넣을 곳
			</div>
			<section
				className={
					'flex flex-col justify-between h-[140px] bg-white p-2'
				}
			>
				<div>
					<p
						className={
							'text-[14px] font-[700] mb-[2px] text-gray_100'
						}
					>
						장소 이름
					</p>
					<p
						className={
							'text-[14px] font-[700] mb-[2px] text-gray_100'
						}
					>
						서울특별시 양천구 신정동
					</p>
					<p
						className={
							'text-[14px] font-[700] mb-[2px] text-gray_100'
						}
					>
						02-1234-6789
					</p>
				</div>
				<p className={'text-[12px] font-[400] text-gray_60'}>0.5km</p>
			</section>
		</div>
	);
}

export default PlaceCard;
