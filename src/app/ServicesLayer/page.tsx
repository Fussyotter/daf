import React, { RefObject } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollHint from '../components/ScrollHint/page';
import AnimatedText from '../components/AnimatedText/page';
import Rectangles from '../components/Rectangles/page';

import AnimatedParagraph from '../components/AnimatedParagraph/page';

interface ServicesLayerProps {
	parallax: RefObject<any>;
    offset:number;
}

const ServicesLayer: React.FC<ServicesLayerProps> = ({ parallax,offset, }) => {
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
				<div
					style={{
						position: 'absolute',
						left: '50%',
						transform: 'translate(-50%, 0)',
						padding: '10px',
						borderRadius: '5px',
						boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
					}}>
					<AnimatedParagraph text='Services' delay={2300} />
				</div>
			</div>
			<div
				style={{
					position: 'absolute',
					left: '10%',
					top: '10%',
					width: '80%',
					display: 'flex',
					flexDirection: 'column',
				}}>
				<AnimatedParagraph
					text='I specialize in headshot styling, career consultations and audition coaching. I have had clients book roles on major network television shows, sign with new representation and have the best headshot sessions of their lives after meeting with me.'
					delay={1000}
					style={{ fontSize: '1em' }}
				/>
				<AnimatedParagraph
					text='I started ‘Dear Actor Friends’ as a way of helping other actors. I love connecting with each of you and building my actor community. If I can help you in any way shape or form, then this crazy ride of a career I’ve been on, has truly been worth it. '
					delay={2300}
				/>
				<br />
				
			</div>
			<div style={{marginLeft:'10%',marginTop:'10%', width:'80%', height:'100%'}}>

			<Rectangles/>
			</div>

			<ScrollHint
				onClick={() => {}}
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
				isMinimized={true}
			/>
		</ParallaxLayer>
	);
};

export default ServicesLayer;
