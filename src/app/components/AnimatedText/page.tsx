import React, {CSSProperties} from 'react';
import { useSpring, animated } from 'react-spring';

interface AnimatedTextProps {
	text: string;
	delay?: number;
	style?: CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 1000 , style={}}) => {
	const slideInText = useSpring({
		from: { transform: 'translate3d(0,10%,0)', opacity: 0 },
		to: { transform: 'translate3d(0,0,0)', opacity: 1 },
		delay: delay,
		config: {
			duration: 600,
		},
	});

	const firstLetter = text.charAt(0);
	const restOfText = text.slice(1);

	return (
		<div style={{ fontSize: '1.5em', color: 'black' }}>
			<span style={{ opacity: 1 }}>{firstLetter}</span>
			<animated.span style={slideInText}>{restOfText}</animated.span>
		</div>
	);
};

export default AnimatedText;
