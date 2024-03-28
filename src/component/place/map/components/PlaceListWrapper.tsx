import PlaceCard from '@/component/card/PlaceCard';

function PlaceListWrapper() {
	return (
		<section className='flex flex-col overflow-scroll items-center w-full'>
			<PlaceCard />
			<PlaceCard />
			<PlaceCard />
			<PlaceCard />
		</section>
	);
}

export default PlaceListWrapper;
