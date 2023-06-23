
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './scrollHint.css'


interface ScrollHintProps {
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
	nextPageInfo?: string[];
}

const ScrollHint: React.FC<ScrollHintProps> = ({
	onClick,
	nextPageInfo = ['', ''],
}) => {
	return (
		<div
			className='line'
			onClick={(e) => {
				e.stopPropagation();
				onClick(e);
			}}>
			<span className='nextPageInfoTop'>{nextPageInfo[0]}-</span>
			<span className='nextPageInfoBottom'>{nextPageInfo[1]}-</span>
			<FaChevronDown className='chevron' size={30} />
		</div>
	);
};

export default ScrollHint;
