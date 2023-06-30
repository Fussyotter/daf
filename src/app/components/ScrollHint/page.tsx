import React, { useState } from 'react';
import { FaChevronDown, FaBars } from 'react-icons/fa'; // FaBars will represent the minimized state
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
	isMinimized?: boolean; // new prop to indicate whether the component should start in a minimized state
}

const ScrollHint: React.FC<ScrollHintProps> = ({
	onClick,
	branchText = ['', ''],
	position = { bottom: '10%', left: '50%' },
	delay = 0,
	duration = 2,
	EndComponent,
	branchSide = 'left',
	isMinimized = false, // default value of the new prop is false, meaning component starts in its normal state
}) => {
	const [isExpanded, setIsExpanded] = useState(!isMinimized); // state to control whether component is in its normal or minimized state
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
	  const handleEndComponentClick = (
			event: React.MouseEvent<HTMLDivElement>
		) => {
			if (isMinimized) {
				setIsExpanded(!isExpanded);
			} else {
				onClick(event);
			}
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
      style={isExpanded ? lineStyle : { ...lineStyle, height: '1px' }} // if component is not expanded, height is set to 1px to show just the button
      onClick={(e) => {
        e.stopPropagation();
        if (isExpanded) onClick(e); // pass through click events to onClick only if component is expanded
      }}
    >
      {isExpanded && branchText.map((text, index) => (
        <span
          className={`branch branch${index}`}
          style={{ bottom: `${5 + (index / (branchText.length - 1)) * 50}%` }}
        >
          {text}
        </span>
      ))}
      <animated.div style={{ ...props, ...endComponentStyle }} onClick={handleEndComponentClick}>
        {EndComponent || (isExpanded ? <FaChevronDown className='chevron' size={30} /> : <FaBars className='chevron' size={30} />)}
      </animated.div>
    </div>
  );
};

export default ScrollHint;
