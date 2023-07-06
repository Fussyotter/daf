import React, { RefObject } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollHint from '../components/ScrollHint/page';
import Rectangles from '../components/Rectangles/page';
import AnimatedParagraph from '../components/AnimatedParagraph/page';
import styles from './ServicesLayer.module.css';

interface ServicesLayerProps {
	parallax: RefObject<any>;
    offset:number;
}

const ServicesLayer: React.FC<ServicesLayerProps> = ({ parallax, offset }) => {
	return (
		<ParallaxLayer
			offset={offset}
			speed={0.3}
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				
			<div className={styles.titleBox}>
				<AnimatedParagraph text='Services' delay={2300} />
			</div>

			<div className={styles.container}>
				<AnimatedParagraph
					text='I specialize in headshot styling, career consultations and audition coaching. I have had clients book roles on major network television shows, sign with new representation and have the best headshot sessions of their lives after meeting with me.'
					delay={1000}
					style={{ fontSize: '1em' }}
				/>
				<AnimatedParagraph
					text='I started ‘Dear Actor Friends’ as a way of helping other actors. I love connecting with each of you and building my actor community. If I can help you in any way shape or form, then this crazy ride of a career I’ve been on, has truly been worth it.'
					delay={2300}
				/>
			</div>

			<div className={styles.rectanglesContainer}>
				<Rectangles />
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
				useOverlay={true}
			/>
		</ParallaxLayer>
	);
};


export default ServicesLayer;
