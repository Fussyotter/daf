import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import './scrollHint.css';

interface ScrollHintProps {
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
	nextPageInfo?: string[];
	position?: { bottom: string; left: string };
	delay?: number;
	duration?: number;
	EndComponent?: React.ReactNode;
}

const ScrollHint: React.FC<ScrollHintProps> = ({
	onClick,
	nextPageInfo = ['', ''],
	position = { bottom: '10%', left: '50%' },
	delay = 0,
	duration = 2,
	EndComponent,
}) => {
	let lineStyle: React.CSSProperties = {
		position: 'absolute',
		width: '1px',
		background: 'black',
		...position,
	};

	let endComponentStyle: React.CSSProperties = {
		position: 'absolute',
		bottom: 0,
		cursor: 'pointer',
	};

	const props = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1},
		delay: delay * 1000,
		config: {
			duration: duration * 1000,
		},
	});

	return (
		<div
			className='line'
			style={lineStyle}
			onClick={(e) => {
				e.stopPropagation();
				onClick(e);
			}}>
			<span className='nextPageInfoTop'>{nextPageInfo[0]}-</span>
			<span className='nextPageInfoBottom'>{nextPageInfo[1]}-</span>
			<animated.div style={{ ...props, ...endComponentStyle }}>
				{EndComponent || <FaChevronDown className='chevron' size={30} />}
			</animated.div>
		</div>
	);
};

export default ScrollHint;
