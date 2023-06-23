import React, { CSSProperties} from 'react';

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
		left: position.left || '0px',
		color: 'black',
		padding: '5px',
		fontSize: '1.5em',
		writingMode: orientation === 'vertical' ? 'vertical-lr' : 'horizontal-tb',
	};

	return <nav style={style}>{items.join(' | ')}</nav>;
};

export default Navbar;
