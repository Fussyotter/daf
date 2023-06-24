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
interface HomePageParallaxLayerProps {
	parallax: RefObject<any>;
}

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
			<ScrollHint
				onClick={() => parallax.current.scrollTo(1)}
				nextPageInfo={['Services', 'Clients']}
			/>
			<HorizontalLine
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
{/* 
			<HorizontalLine
				top='36%'
				direction='right'
				delay={2}
				width='280px'
				EndComponent={
					<AnimatedParagraph
						text=' lorem ipsum dolor sit amet, consectetur adipiscing elit. '
						style={{
							color: 'black',
							fontSize: '.8em',
							width: '200px',
							height: '100px',
						}}
						delay={3000}
					/>
				}
			/> */}
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
			/>

			<Navbar
				orientation='horizontal'
				position={{ top: '0px', left: '10px' }}
				items={['About', 'Contact', 'Services', 'New Client Form']}
			/>
			<Navbar
				orientation='vertical'
				position={{ top: '50px', left: '5px' }}
				items={['Home', 'Testimonials', 'Clients']}
			/>
			<div
				style={{
					position: 'absolute',
					left: '80px',
					top: '40px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					zIndex: -1,
					width: '100%',
				}}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						flex: 1,
						// marginRight: '150px',
						width: '50%',
						height: '100%',
					}}>
					<AnimatedText text='Dear' delay={1000} />
					<AnimatedText text='Actor' delay={1500} />
					<AnimatedText text='Friends' delay={2000} />
					<AnimatedParagraph text='With Alison Yates' delay={2300} />
				</div>
			</div>
		</ParallaxLayer>
	);
};

export default HomePageParallaxLayer;
