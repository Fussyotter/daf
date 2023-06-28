import React, { RefObject } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import ScrollHint from '../ScrollHint/page';
import Navbar from '../Nav/page';
import AnimatedText from '../AnimatedText/page';
import AnimatedParagraph from '../AnimatedParagraph/page';
import AnimatedImage from '../AnimatedImage/page';
import HorizontalLine from '../Branch/page';
import SpeedCarousel from '../SpeedCarousel/page';
import SocialMediaBar from '../Socials/page';
interface HomePageParallaxLayerProps {
	parallax: RefObject<any>;
}
const images = [
	'/al1.jpeg',
	'/al2.jpeg',
	'/al3.jpeg',
	'/al5.jpeg',
];

const HomePageParallaxLayer: React.FC<HomePageParallaxLayerProps> = ({
	parallax,
}) => {
return (
	<ParallaxLayer
		offset={0}
		speed={0.3}
		style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'center',
		}}>
		<div
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				zIndex: -1,
			}}>
			<div style={{ position: 'absolute', left: '5%', top: '5%' }}>
				<SocialMediaBar />
			</div>
			<div
				style={{
					position: 'absolute',
					left: '50%',
					transform: 'translate(-50%, 0)',
					background: 'your-color-or-image',
					padding: '10px',
					borderRadius: '5px',
				}}>
				<AnimatedText text='Dear' delay={1000} />
				<AnimatedText text='Actor' delay={1500} />
				<AnimatedText text='Friends' delay={2000} />
				<AnimatedParagraph text='With Alison Yates' delay={2300} />
			</div>
			<div style={{ position: 'absolute', right: '5%', top: '5%' }}>
				<button className='start-now-button'>Start Now</button>
			</div>
		</div>
		<div
			style={{
				position: 'absolute',
				top: '25%',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}>
			<AnimatedParagraph
				text='A working actor helping other actors work more. 
'
				delay={3000}
				style={{ fontSize: '.9em' }}
			/>
		</div>
		<div
			style={{
				position: 'absolute',
				top: '30%',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
				}}>
				<img
					src='/al1.jpeg'
					alt=''
					style={{
						width: '50%',
						height: '60vh',
						objectFit: 'cover',
					}}
				/>
				<div
					style={{
						marginLeft: '-15%', // offset from the image
					}}>
					<AnimatedParagraph
						text="LET'S ACT MORE. SHALL WE?"
						delay={3000}
						style={{
							color: 'white',
							fontSize: '2.5em',
							textAlign: 'left',
						}}
					/>
				</div>
			</div>
		</div>

		<ScrollHint
			onClick={() => parallax.current.scrollTo(1)}
			branchText={[
				'About',
				'Contact',
				'Services',
				'New Client Form',
				'Home',
				'Testimonials',
				'Clients',
			]}
			position={{ left: '2%', bottom: '10%' }}
			branchSide='right'
		/>
	</ParallaxLayer>
);
};

export default HomePageParallaxLayer;

{/* <HorizontalLine
	top='10%'
	direction='right'
	delay={2}
	width='100px'
	EndComponent={
		<AnimatedParagraph
			text='Helping other actors act more. '
			style={{
				color: 'black',
				fontSize: '.8em',
				boxSizing: 'border-box',
				width: '200px',
				height: '100px',
			}}
			delay={3000}
		/>
	}
/>

<HorizontalLine
	top='75%'
	direction='left'
	delay={2}
	width='300px'
	EndComponent={
		<AnimatedImage
			src='/al1.jpeg'
			alt='placeholder'
			delay={3000}
			style={{
				height: '300px',
				borderRadius: '10%',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', // soft shadow for depth
			}}
		/>
	}
/>
<HorizontalLine
	top='60%'
	direction='left'
	delay={2}
	width='200px'
	EndComponent={
		<AnimatedParagraph
			text=' lorem ipsum dolor sit amet, consectetur adipiscing elit. '
			style={{
				boxSizing: 'border-box',
				fontSize: '.8em',
				width: '200px',
				height: '100px',
			}}
			delay={3000}
		/>
	}
/>

<HorizontalLine
	top='70%'
	direction='right'
	delay={2}
	width='400px'
	EndComponent={
		<AnimatedParagraph
			text=' lorem ipsum dolor sit amet, consectetur adipiscing elit. '
			style={{
				color: 'black',
				boxSizing: 'border-box',
				fontSize: '.8em',
				width: '200px',
				height: '100px',
			}}
			delay={3000}
		/>
	}
/> */}