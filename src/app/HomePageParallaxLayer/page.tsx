import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';


const HomePageParallaxLayer: React.FC<{ onClick: () => void }> = ({
	onClick,
}) => {
const fadeIn1 = useSpring({
	from: { opacity: 0 },
	to: { opacity: 1 },
	delay: 500,
});
const fadeIn2 = useSpring({
	from: { opacity: 0 },
	to: { opacity: 1 },
	delay: 1000,
});
const fadeIn3 = useSpring({
	from: { opacity: 0 },
	to: { opacity: 1 },
	delay: 1500,
});

	return (
		<ParallaxLayer
			offset={0.051}
			speed={0.3}
			onClick={onClick}
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
				padding: '10%',
			}}>
			<div
				style={{
					position: 'absolute',
					left: '80px', // push right by 20px
					top: '20px', // push down by 20px
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						flex: 1,
						borderRight: '1px dashed black',
						borderBottom: '1px dashed black',
						marginRight: '150px',
						width: '100%',
					}}>
					<div style={{ fontSize: '5em', color: 'black' }}>Dear</div>
					<div style={{ fontSize: '5em', color: 'black' }}>Actor</div>
					<div style={{ fontSize: '5em', color: 'black', }}>Friends</div>
					<p style={{ fontSize: '2em', color: 'black', marginTop: '2em'}}>
						With Alison Yates
					</p>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'stretch',
						justifyContent: 'space-between',
						width: '100%',
						flex: 1,
											}}>
					<animated.div
						style={{
							...fadeIn1,
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
				
					</animated.div>
					<animated.div style={{ ...fadeIn2,flex: 1 }}>
						<img
							src='placeholder1.jpg'
							alt='Your Image'
							style={{ width: '600px', height: '100%' }}
						/>
					</animated.div>
					<animated.div
						style={{
							...fadeIn3,
							flex: 1,
							marginRight: '2px',
							color: 'black',
							background: 'white',
							padding: '20px',
							boxSizing: 'border-box',
						}}>
					
						<br />I started ‘Dear Actor Friends’ as a way of helping other
						actors. I love connecting with each of you and building my actor
						community. If I can help you in any way shape or form, then this
						crazy ride of a career I’ve been on, has truly been worth it.
					</animated.div>
				</div>
			</div>
		</ParallaxLayer>
	);
};

export default HomePageParallaxLayer;
