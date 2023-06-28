import React, { useState, useEffect, CSSProperties } from 'react';
import { useSpring, animated } from 'react-spring';

interface SpeedCarouselProps {
	images: string[];
	alt?: string;
	delay?: number;
	style?: React.CSSProperties;
	carouselSpeed?: number;
}

const SpeedCarousel: React.FC<SpeedCarouselProps> = ({
	images,
	alt = '',
	delay = 1000,
	style = {},
	carouselSpeed = 200, // determines how fast the carousel changes image in ms
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (!isHovered) {
			const timer = setTimeout(() => {
				setCurrentIndex((currentIndex + 1) % images.length);
			}, carouselSpeed);
			return () => clearTimeout(timer);
		}
	}, [currentIndex, isHovered, carouselSpeed, images.length]);

	const fadeInImage = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		delay: delay,
		config: {
			duration: 1000,
		},
	});

	const defaultStyle: CSSProperties = {
		width: '100%', // this can be adjusted as needed
		height: 'auto', // this can be adjusted as needed
	};

	const mergedStyle = { ...defaultStyle, ...fadeInImage, ...style };

	return (
		<animated.img
			src={images[currentIndex]}
			alt={alt}
			style={mergedStyle}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		/>
	);
};

export default SpeedCarousel;
