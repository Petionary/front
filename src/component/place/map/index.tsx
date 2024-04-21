'use client';

import {useEffect, useRef} from 'react';
import PlaceListContainer from './components/PlaceListContainer';

declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		kakao: any;
	}
}

function Map() {
	const container = useRef(null);

	useEffect(() => {
		const script = document.createElement('script');
		script.async = true;
		script.src = `//dapi.kakao.com/v2/maps/sdk.js?appKey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services&autoload=false`;
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
			<PlaceListContainer />
		</div>
	);
}

export default Map;
