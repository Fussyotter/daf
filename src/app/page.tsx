'use client';
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import HomePageParallaxLayer from './HomePageParallaxLayer/page';

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
			<Parallax ref={parallax} pages={3}>
				<ParallaxLayer
					offset={0}
					speed={0}
					onClick={() => parallax.current.scrollTo(1)}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						zIndex: 1,
						display: 'flex',
						flexDirection: 'column',
					}}>
					<h1
						style={{
							margin: 0,
							color: 'black',
							padding: '15px',
							fontSize: '1.5em',
						}}>
						About | Contact | Instagram | New Client Form
					</h1>
					<h1
						style={{
							margin: 0,
							color: 'black',
							padding: '15px',
							fontSize: '1.5em',
							writingMode: 'vertical-lr',
						}}>
						Home | Services | Clients | Testimonials
					</h1>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={1}
					style={{ backgroundColor: '#3E4A89' }}
				/>

				<ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '20%', marginLeft: '55%' }}
					/>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '10%', marginLeft: '15%' }}
					/>
				</ParallaxLayer>

				<ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '20%', marginLeft: '70%' }}
					/>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '20%', marginLeft: '40%' }}
					/>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '10%', marginLeft: '10%' }}
					/>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '20%', marginLeft: '75%' }}
					/>
				</ParallaxLayer>

				<ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '20%', marginLeft: '60%' }}
					/>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '25%', marginLeft: '30%' }}
					/>
					<img
						src={url('cloud')}
						style={{ display: 'block', width: '10%', marginLeft: '80%' }}
					/>
				</ParallaxLayer>

				<ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
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
					speed={-0.3}
					style={{
						backgroundSize: '80%',
						backgroundPosition: 'center',
						backgroundImage: url('clients', true),
					}}
				/>

				<HomePageParallaxLayer onClick={() => parallax.current.scrollTo(1)}
				 style={{
					position: 'absolute'}}/>

				<ParallaxLayer
					offset={1}
					speed={0.1}
					onClick={() => parallax.current.scrollTo(2)}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<img src={url('bash')} style={{ width: '40%' }} />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={-0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					onClick={() => parallax.current.scrollTo(0)}>
					<img src={url('clients-main')} style={{ width: '40%' }} />
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
