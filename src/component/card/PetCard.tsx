import React from 'react';

function PetCard() {
	return (
		<div className={'w-[180px] h-[260px] p-[20px] bg-white'}>
			<div className={'w-[120px] h-[120px] rounded-[100%] bg-gray_40'}>
				강아지 이미지
			</div>
			<p>🐶 유동이</p>
		</div>
	);
}

export default PetCard;
