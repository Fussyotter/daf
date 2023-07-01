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
				<ServicesLayer parallax={parallax} offset={1} />
	

		

			

				{/* <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '20%', marginLeft: '5%' }}
					/>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '15%', marginLeft: '75%' }}
					/>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2.5}
					speed={-0.4}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						pointerEvents: 'none',
					}}>
					<img src={url('earth')} style={{ width: '60%' }} />
				</ParallaxLayer>



				<ParallaxLayer
					offset={2}
					speed={-0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					>
					<img src={url('clients-main')} style={{ width: '40%' }} />
				</ParallaxLayer> */}
			</Parallax>
		</div>
	);
}
