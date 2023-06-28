import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import './scrollHint.css';
import { useEffect, useRef } from 'react';

interface ScrollHintProps {
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
	branchText?: string[];
	position?: { bottom: string; left: string };
	delay?: number;
	duration?: number;
	EndComponent?: React.ReactNode;
	branchSide?: 'left' | 'right';
}

const ScrollHint: React.FC<ScrollHintProps> = ({
	onClick,
	branchText = ['', ''],
	position = { bottom: '10%', left: '50%' },
	delay = 0,
	duration = 2,
	EndComponent,
	branchSide = 'left',
}) => {
	let lineStyle: React.CSSProperties = {
		position: 'absolute',
		width: '1px',
		background: 'black',
		...position,
		zIndex: 10,
	};

	let endComponentStyle: React.CSSProperties = {
		position: 'absolute',
		bottom: 0,
		cursor: 'pointer',
	};
	const branchRefs = useRef<(HTMLSpanElement | null)[]>([]);
	branchRefs.current = branchText.map((_, i) => branchRefs.current[i] ?? null);
	useEffect(() => {
		const branchSpacing = `${100 / (branchText.length + 1)}%`;
		branchRefs.current.forEach((ref, index) => {
			if (ref) {
				ref.style.setProperty('--branch-index', `${index}`);
				ref.style.setProperty('--branch-spacing', branchSpacing);
			}
		});
	}, [branchText]);

	const props = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		delay: delay * 1000,
		config: {
			duration: duration * 1000,
		},
	});

	const branchSpacing = `${100 / (branchText.length + 1)}%`;

	return (
		<div
			className={`line ${branchSide}`}
			style={lineStyle}
			onClick={(e) => {
				e.stopPropagation();
				onClick(e);
			}}>
			{branchText.map((text, index) => (
				<span
					className={`branch branch${index}`}
					style={{ bottom: `${5 + (index / (branchText.length - 1)) * 50}%` }}>
					{text}
				</span>
			))}
			<animated.div style={{ ...props, ...endComponentStyle }}>
				{EndComponent || <FaChevronDown className='chevron' size={30} />}
			</animated.div>
		</div>
	);
};

export default ScrollHint;
