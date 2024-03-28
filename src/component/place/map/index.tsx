'use client';
import PlaceCard from '@/component/card/PlaceCard';
import {ArrowIcon} from '@/icons/default';
import {useEffect, useRef, useState} from 'react';
import PlaceDetailContainer from './components/PlaceDetailContainer';
import PlaceListContainer from './components/PlaceListContainer';

declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		kakao: any;
	}
}

function Map() {
	const container = useRef(null);
	const [listToggle, setListToggle] = useState(true);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = `//dapi.kakao.com/v2/maps/sdk.js?appKey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
		document.head.appendChild(script);

		script.onload = () => {
			window.kakao.maps.load(() => {
				const mapContainer = document.getElementById('container');
				const mapOption = {
					center: new window.kakao.maps.LatLng(37.420152, 127.126665),
					level: 3,
				};
				const map = new window.kakao.maps.Map(mapContainer, mapOption);
			});
		};
	}, [container]);

	return (
		<div id='container' ref={container} className='w-full h-full relative'>
			<PlaceListContainer
				openToggle={listToggle}
				onClickOpen={() => setListToggle(!listToggle)}
			/>
			{/* 필터 옵션 */}
		</div>
	);
}

export default Map;
