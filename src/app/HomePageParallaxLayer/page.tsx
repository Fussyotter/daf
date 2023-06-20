import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const HomePageParallaxLayer: React.FC<{ onClick: () => void }> = ({
	onClick,
}) => {
	return (
		<ParallaxLayer
			offset={0}
			speed={0.3}
			onClick={onClick}
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '10%',
				backgroundColor: 'rgba(254,225,219,1)',
			}}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'center',
					width: '100%',
					maxWidth: '800px',
				}}>
				<h1 style={{ fontSize: '5em', color: 'white' }}>
					<img
						src='multiD.svg'
						alt='D'
						style={{ width: '1em', height: '1em', verticalAlign: 'middle' }}
					/>
					ear Actor <br />
					Friends{' '}
				</h1>
				<p style={{ fontSize: '2em', color: 'white', marginBottom: '2em' }}>
					With Alison Yates
				</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'stretch',
						justifyContent: 'space-between',
						width: '100%',
					}}>
					<div
						style={{
							flex: 1,
							marginRight: '2px',
							color: 'black',
							background: 'white',
							padding: '20px',
							boxSizing: 'border-box',
						}}>
						I specialize in headshot styling, career consultations and audition
						coaching. I have had clients book roles on major network television
						shows, sign with new representation and have the best headshot
						sessions of their lives after meeting with me.
						<br />
						<br />I started ‘Dear Actor Friends’ as a way of helping other
						actors. I love connecting with each of you and building my actor
						community. If I can help you in any way shape or form, then this
						crazy ride of a career I’ve been on, has truly been worth it.
					</div>
					<div style={{ flex: 1, marginLeft: '2px' }}>
						<img
							src='multiD.svg'
							alt='Your Image'
							style={{ width: '100%', height: '400px' }}
						/>
					</div>
				</div>
			</div>
		</ParallaxLayer>
	);
};

export default HomePageParallaxLayer;
