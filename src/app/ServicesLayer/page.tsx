import React, { RefObject } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollHint from '../components/ScrollHint/page';
import AnimatedText from '../components/AnimatedText/page';
import AnimatedParagraph from '../components/AnimatedParagraph/page';
import SocialMediaBar from '../components/Socials/page';
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
						boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', // soft shadow for depth
					}}>
					<AnimatedParagraph text='Services' delay={2300} />
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
			<ScrollHint
				onClick={() => parallax.current.scrollTo(2)}
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

export default ServicesLayer;
