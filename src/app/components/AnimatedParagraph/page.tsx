import React, {CSSProperties} from 'react';
import { useSpring, animated } from 'react-spring';

interface AnimatedParagraphProps {
    text: string;
    delay?: number;
    style?: CSSProperties;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ text, delay = 2000, style={} }) => {
	const slideInText = useSpring({
		from: { transform: 'translate3d(0,0,0)', opacity: 0 },
		to: { transform: 'translate3d(0,0,0)', opacity: 1 },
		delay: delay,
		config: {
			duration: 400,
		},
	});
    const defaultStyle: CSSProperties = {
        fontSize: '1em',
        color: 'black',
        };
      const mergedStyle = { ...defaultStyle, ...slideInText, ...style };


    return (
        <animated.div style={mergedStyle}>
            {text}
        </animated.div>
    );
        
}
export default AnimatedParagraph;