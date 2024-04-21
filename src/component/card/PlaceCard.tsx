import {IPlace} from '@/types/common';

interface IProps {
	size?: 'sm' | 'lg';
	cursor?: boolean;
	// 추후 수정
	place?: IPlace;
	onClickPlaceCard?: () => void;
}

const data = {
	width: {
		sm: 'w-[250px]',
		lg: 'w-[350px] my-[20px]',
	},
};

function PlaceCard({
	size = 'sm',
	cursor = false,
	place,
	onClickPlaceCard,
}: IProps) {
	return (
		<div
			className={`h-[280px] ${data.width[size]} ${
				cursor && 'cursor-pointer'
			}`}
			onClick={onClickPlaceCard}
		>
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
						{place?.name}
					</p>
					<p
						className={
							'text-[14px] font-[700] mb-[2px] text-gray_100'
						}
					>
						{`${place?.address.area} ${place?.address.city} ${place?.address.localAddress}`}
					</p>
					<p
						className={
							'text-[14px] font-[700] mb-[2px] text-gray_100'
						}
					>
						{place?.phoneNumber}
					</p>
				</div>
				<p className={'text-[12px] font-[400] text-gray_60'}>0.5km</p>
			</section>
		</div>
	);
}

export default PlaceCard;
