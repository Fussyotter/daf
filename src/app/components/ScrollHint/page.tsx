import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaBars } from 'react-icons/fa'; // FaBars will represent the minimized state
import { useSpring, animated } from 'react-spring';
import './scrollHint.css';
import BranchOverlay from '../BranchOverlay/page';

interface ScrollHintProps {
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
	branchText?: string[];
	position?: { bottom: string; left: string };
	delay?: number;
	duration?: number;
	EndComponent?: React.ReactNode;
	branchSide?: 'left' | 'right';
	isMinimized?: boolean;
	useOverlay?: boolean; 
}

const ScrollHint: React.FC<ScrollHintProps> = ({
	onClick,
	branchText = ['', ''],
	position = { bottom: '10%', left: '50%' },
	delay = 0,
	duration = 2,
	EndComponent,
	branchSide = 'left',
	isMinimized = false,
	useOverlay = false, 
}) => {
	const [isExpanded, setIsExpanded] = useState(
		window.innerWidth > 600 ? true : !isMinimized
	);
	const [isOverlayVisible, setIsOverlayVisible] = useState(false);

	useEffect(() => {
function handleResize() {
	if (useOverlay) {
		setIsExpanded(false);
	} else if (window.innerWidth > 600) {
		setIsExpanded(true);
	} else {
		setIsExpanded(!isMinimized);
	}
}

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [isMinimized]);

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

	const handleEndComponentClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (useOverlay) {
			setIsOverlayVisible(!isOverlayVisible);
		} else if (isMinimized) {
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
		<>
			{useOverlay && isOverlayVisible && (
				<BranchOverlay branchText={branchText} />
			)}
			<div
				className={`line ${branchSide}`}
				style={isExpanded ? lineStyle : { ...lineStyle, height: '1px' }}
				onClick={(e) => {
					e.stopPropagation();
					if (isExpanded && !useOverlay) onClick(e); 
				}}>
				{isExpanded &&
					!useOverlay &&
					branchText.map((text, index) => (
						<span
							className={`branch branch${index}`}
							style={{
								bottom: `${5 + (index / (branchText.length - 1)) * 50}%`,
							}}>
							{text}
						</span>
					))}
				<animated.div
					style={{ ...props, ...endComponentStyle }}
					onClick={handleEndComponentClick}>
					{EndComponent ||
						(useOverlay ? (
							<FaBars className='chevron' size={30} />
						) : isExpanded ? (
							<FaChevronDown className='chevron' size={30} />
						) : (
							<FaBars className='chevron' size={30} />
						))}
				</animated.div>
			</div>
		</>
	);
}

export default ScrollHint;
