import PlaceCard from '@/component/card/PlaceCard';
import {IPlace} from '@/types/common';

const places: IPlace[] = [
	{
		name: '장소',
		phoneNumber: '02-1234-5678',
		image: '',
		address: {
			area: '서울',
			city: '양천구',
			localAddress: '신정3동',
		},
		latlng: {
			latitude: 31.138541,
			longitude: 121.42441,
		},
	},
	{
		name: '장소',
		phoneNumber: '02-1234-5678',
		image: '',
		address: {
			area: '서울',
			city: '양천구',
			localAddress: '신정3동',
		},
		latlng: {
			latitude: 22.280331,
			longitude: 114.156599,
		},
	},
	{
		name: '장소',
		phoneNumber: '02-1234-5678',
		image: '',
		address: {
			area: '서울',
			city: '양천구',
			localAddress: '신정3동',
		},
		latlng: {
			latitude: 13.138541,
			longitude: 121.42441,
		},
	},
];

function PlaceListWrapper() {
	return (
		<section className='flex flex-col overflow-scroll items-center w-full'>
			<PlaceCard size='lg' cursor place={places[0]} />
			<PlaceCard size='lg' cursor place={places[0]} />
			<PlaceCard size='lg' cursor place={places[0]} />
			<PlaceCard size='lg' cursor place={places[0]} />
		</section>
	);
}

export default PlaceListWrapper;
