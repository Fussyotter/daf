import React, {CSSProperties} from 'react';
import { useSpring, animated } from 'react-spring';

interface AnimatedParagraphProps {
    text: string;
    delay?: number;
    style?: CSSProperties;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ text, delay = 1000, style={} }) => {
	const slideInText = useSpring({
		from: { transform: 'translate3d(0,10%,0)', opacity: 0 },
		to: { transform: 'translate3d(0,0,0)', opacity: 1 },
		delay: delay,
		config: {
			duration: 600,
		},
	});
    const defaultStyle: CSSProperties = {
        fontSize: '1.5em',
        color: 'black',
        marginTop: '2em',};
      const mergedStyle = { ...defaultStyle, ...slideInText, ...style };


    return (
        <animated.div style={mergedStyle}>
            {text}
        </animated.div>
    );
        
}
export default AnimatedParagraph;