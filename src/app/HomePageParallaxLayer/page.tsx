import React, { RefObject } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollHint from '../components/ScrollHint/page';
import AnimatedText from '../components/AnimatedText/page';
import AnimatedParagraph from '../components/AnimatedParagraph/page';
import SocialMediaBar from '../components/Socials/page';
interface HomePageParallaxLayerProps {
	parallax: RefObject<any>;
	offset: number;
}


const HomePageParallaxLayer: React.FC<HomePageParallaxLayerProps> = ({
	parallax,
	offset,
}) => {
return (
	<ParallaxLayer
		offset={offset}
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
					padding: '10px',
					borderRadius: '5px',
					boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', // soft shadow for depth
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
				backgroundColor: 'rgba(0,0,0,0.5)',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', 
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
						marginLeft: '-15%', 
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
/>  */}