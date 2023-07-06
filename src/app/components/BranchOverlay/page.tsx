import React from 'react';
import { animated, useSpring } from 'react-spring';

interface BranchOverlayProps {
	branchText: string[];
	isVisible: boolean;
	setIsVisible: (isVisible: boolean) => void;
}

const BranchOverlay: React.FC<BranchOverlayProps> = ({
	branchText,
	isVisible,
	setIsVisible,
}) => {
	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation(); // Prevent click event from propagating to window click listener
		setIsVisible(!isVisible);
	};

	const animationProps = useSpring({
		transform: isVisible ? 'translateY(0%)' : 'translateY(100%)',
		config: { friction: 26, tension: 170 },
	});

	return (
		isVisible && (
			<animated.div
				onClick={handleClick}
				style={{
					position: 'fixed',
					bottom: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
					background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-end',
					zIndex: 20,
					...animationProps,
				}}>
				<ul
					style={{
						listStyle: 'none',
						padding: 0,
						margin: 0,
						background: '#fff',
						borderRadius: '8px',
						overflow: 'auto',
						maxHeight: '80vh',
						width: '80vw',
						textAlign: 'center',
					}}>
					{branchText.map((text, index) => (
						<li
							key={index}
							style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
							{text}
						</li>
					))}
				</ul>
			</animated.div>
		)
	);
};

export default BranchOverlay;
