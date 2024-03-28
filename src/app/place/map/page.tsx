'use client';
import PlaceCard from '@/component/card/PlaceCard';
import Map from '@/component/place/map';
import {ArrowIcon} from '@/icons/default';
import {useEffect, useRef, useState} from 'react';

declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		kakao: any;
	}
}

function PlaceMap() {
	return <Map />;
}

export default PlaceMap;
