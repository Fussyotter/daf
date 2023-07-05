import React, { useState, useEffect } from 'react';

interface BranchOverlayProps {
	branchText: string[];
}

const BranchOverlay: React.FC<BranchOverlayProps> = ({ branchText }) => {
	const [isVisible, setIsVisible] = useState(true);
	useEffect(() => {
		const closeOverlay = (e: MouseEvent) => {
			if (
				e.target instanceof Node &&
				!document.getElementById('branchOverlay')?.contains(e.target)
			) {
				setIsVisible(false);
			}
		};

		window.addEventListener('click', closeOverlay);
		return () => {
			window.removeEventListener('click', closeOverlay);
		};
	}, []);

	if (!isVisible) {
		return null;
	}
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 20,
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
		</div>
	);
};

export default BranchOverlay;
