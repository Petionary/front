function PlaceListToolBox() {
	return (
		<div className='p-[20px]'>
			<div className='w-full'>
				<input className='border w-[80%] h-[48px]' />
			</div>
			<div className='my-[5px]'>서울시 종로구</div>
			{/* 정렬 옵션 */}
			<div className='flex justify-between mx-[10px] my-[5px]'>
				<span className='border px-2 py-1 text-[14px] rounded-full'>
					거리순
				</span>
				<span className='border px-2 py-1 text-[14px] rounded-full'>
					평점 높은 순
				</span>
				<span className='border px-2 py-1 text-[14px] rounded-full'>
					리뷰 많은 순
				</span>
			</div>
		</div>
	);
}

export default PlaceListToolBox;
