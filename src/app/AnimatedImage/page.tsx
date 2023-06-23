import React, {CSSProperties} from 'react';
import { useSpring, animated } from 'react-spring';

interface AnimatedImageProps {
	src: string;
	alt?: string; 
	delay?: number;
	style?: React.CSSProperties;
}
const AnimatedImage: React.FC<AnimatedImageProps> = ({ src,alt='', delay = 1000, style={} }) => {
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
    
    return <animated.img src={src} alt={alt} style={mergedStyle} />;
}
export default AnimatedImage;
