interface IProps {
	openToggle: boolean;
	onClickCancel: () => void;
}

function PlaceDetailContainer({openToggle, onClickCancel}: IProps) {
	const openAnimation = openToggle ? 'translate-x-0' : '-translate-x-[420px]';
	return (
		<div
			className={`w-[400px] h-full duration-500 bg-white z-5 overflow-scroll ml-[2px] ${openAnimation}`}
		>
			<span className='absolute right-[20px]' onClick={onClickCancel}>
				X
			</span>
			<div className='h-[200px] bg-gray_20'>이미지</div>
			<div className='flex flex-col px-[20px]'>
				<div>
					<div className='py-[10px] text-[20px] font-bold'>
						기본정보
					</div>
					<div className='py-[5px] flex justify-between'>
						<span>주소</span>
						<span>서울시 송파구 삼전동</span>
					</div>
					<div className='py-[5px] flex justify-between'>
						<span>연락처</span>
						<span>02-1234-5678</span>
					</div>
					<div className='py-[5px] flex justify-between'>
						<span>홈페이지</span>
						<span>https://www.homepage.com</span>
					</div>
				</div>
				<div>
					<div className='py-[10px] text-[20px] font-bold'>
						영업시간
					</div>
					<div className='py-[5px] flex justify-between'>
						<span>평일</span>
						<span>09:00 ~ 21:00</span>
					</div>
					<div className='py-[5px] flex justify-between'>
						<span>토요일</span>
						<span>09:00 ~ 21:00</span>
					</div>
					<div className='py-[5px] flex justify-between'>
						<span>일요일</span>
						<span>09:00 ~ 18:00</span>
					</div>
				</div>
				<div className='py-[10px] text-[20px] font-bold'>후기(50)</div>
				<div className='border mx-[10px] p-2 h-[45px]'>
					OOO님의 후기도 작성해 보세요.
				</div>
			</div>
		</div>
	);
}

export default PlaceDetailContainer;
