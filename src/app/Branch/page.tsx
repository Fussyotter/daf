// HorizontalLine.js
import React from 'react';
import './branch.css';

import { useSpring, animated } from 'react-spring';

interface HorizontalLineProps {
	top?: string;
	direction?: 'left' | 'right';
	delay?: number;
	width?: string;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({
	top = '50%',
	direction = 'right',
	delay = 0,
	width = '200px',
}) => {
	const alignment = direction === 'right' ? { left: '50%' } : { right: '50%' };

	const props = useSpring({
		from: { width: '0px' },
		to: { width: width },
		delay: delay * 1000,
		config: {
			duration: 2000,
		},
	});

	return (
		<animated.div
			className='horizontal-line'
			style={{ ...props, top: top, ...alignment }}
		/>
	);
};

export default HorizontalLine;
