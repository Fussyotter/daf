import React, { RefObject } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import ScrollHint from '../ScrollHint/page';
import Navbar from '../Nav/page';
import AnimatedText from '../AnimatedText/page';
import AnimatedParagraph from '../AnimatedParagraph/page';
import AnimatedImage from '../AnimatedImage/page';

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
			<ScrollHint onClick={() => parallax.current.scrollTo(1)} nextPageInfo={['Services','Clients']} />
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
				}}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						flex: 1,
						borderBottom: '1px dashed black',
						marginRight: '150px',
						width: '100%',
						height: '100%',
					}}>
					<AnimatedText text='Dear' delay={1000} />
					<AnimatedText text='Actor' delay={1500} />
					<AnimatedText text='Friends' delay={2000} />
					<AnimatedParagraph text='With Alison Yates' delay={2300} />
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
					<AnimatedParagraph
						text='I started ‘Dear Actor Friends’ as a way of helping other
						actors. I love connecting with each of you and building my actor
						community. If I can help you in any way shape or form, then this
						crazy ride of a career I’ve been on, has truly been worth it.'
						style={{
							marginRight: '2px',
							color: 'black',
							fontSize: '1em',
							padding: '20px',
							boxSizing: 'border-box',
						}}
						delay={2300}
					/>
						<AnimatedImage
							src={'placeholder1.jpg'}
							delay={2300}
							style={{ width: '600px' }}
						/>
					<AnimatedParagraph
						text='I specialize in headshot styling, career consultations and audition
						coaching. I have had clients book roles on major network television
						shows, sign with new representation and have the best headshot
						sessions of their lives after meeting with me.'
						style={{
							marginRight: '2px',
							color: 'black',
							fontSize: '1em',
							padding: '20px',
							boxSizing: 'border-box',
						}}
						delay={2300}
					/>
				</div>
			</div>
		</ParallaxLayer>
	);
};

export default HomePageParallaxLayer;
