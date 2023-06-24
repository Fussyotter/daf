// HorizontalLine.js
import React from 'react';
import './branch.css';

import { useSpring, animated } from 'react-spring';

interface HorizontalLineWithEndProps {
	top?: string;
	direction?: 'left' | 'right';
	delay?: number;
	width?: string;
	EndComponent?: React.ReactNode;
}

const HorizontalLine: React.FC<HorizontalLineWithEndProps> = ({
	top = '50%',
	direction = 'right',
	delay = 0,
	width = '200px',
	EndComponent,
}) => {
	const alignment = direction === 'right' ? { left: '50%' } : { right: '50%' };
	const endAlignment =
		direction === 'right' ? { left: width } : { right: width };
        

	const props = useSpring({
		from: { width: '0px' },
		to: { width: width },
		delay: delay * 1000,
		config: {
			duration: 2000,
		},
	});
 let endComponentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'left',
    padding: '5px',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    position: 'absolute',
    ...endAlignment // spread in endAlignment
};

	return (
		<div className='line-container' style={{ top: top, ...alignment }}>
			<animated.div className='horizontal-line' style={props} />
			<div className='end-component' style={endComponentStyle}>
				{EndComponent}
			</div>
		</div>
	);
};

export default HorizontalLine;
