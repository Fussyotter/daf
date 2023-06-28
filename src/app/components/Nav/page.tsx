import React, { CSSProperties } from 'react';

interface NavbarProps {
	orientation?: 'horizontal' | 'vertical';
	position: { top?: string; left?: string };
	items: string[];
}

const Navbar: React.FC<NavbarProps> = ({
	orientation = 'horizontal',
	position,
	items,
}) => {
	const style: CSSProperties = {
		position: 'absolute',
		top: position.top || '0px',
		left: '50%', 
		transform: 'translateX(-50%)', 
		color: 'black',
		padding: '5px',
		fontSize: '1em',
		writingMode: orientation === 'horizontal' ? 'horizontal-tb' : 'vertical-lr',
	};

	const mobileStyle: CSSProperties = {
		...style,
		writingMode: 'horizontal-tb',
	};

	return (
		<>
			<style jsx>
				{`
					@media screen and (max-width: 600px) {
						nav {
							writing-mode: ${mobileStyle.writingMode};
						}
					}
				`}
			</style>
			<nav style={style}>{items.join(' | ')}</nav>
		</>
	);
};

export default Navbar;