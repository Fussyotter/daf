'use client';
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import HomePageParallaxLayer from './HomePageParallaxLayer/page';
import ServicesLayer from './ServicesLayer/page';

// Little helpers ...
const url = (name: string, wrap = false) =>
	`${
		wrap ? 'url(' : ''
	}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
		wrap ? ')' : ''
	}`;

export default function App() {
	const parallax = useRef<IParallax>(null!);
	return (
		<div style={{ width: '100%', height: '100%', background: '#3E4A89' }}>
			<Parallax ref={parallax} pages={2}>
				<HomePageParallaxLayer parallax={parallax} offset={0} />
				<ParallaxLayer
					offset={1}
					speed={0.5}
					style={{ backgroundColor: '#E5E5E5', height: '5vh', opacity: '.6' }} // Different color and small height
				/>
				<ServicesLayer parallax={parallax} offset={1} />
			</Parallax>
			
		</div>
	);
}
