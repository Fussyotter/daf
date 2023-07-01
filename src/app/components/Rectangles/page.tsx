import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		display: 'flex',
		width: '100%',
		height: '100%',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
	},
	leftSection: {
		position: 'relative',
		width: '50%',
		height: '100%',
		backgroundColor: '#d1cfae',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
		opacity: 0.9,
		backgroundImage: 'url("noiseTest1.png")',
		backgroundBlendMode: 'overlay',
	},
	imageContainer: {
		position: 'absolute',
		width: '40%',
		height: '60%',
		right: '0%',
		backgroundImage: `url('al5.jpeg')`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
	},
	rightSection: {
		width: '50%',
		height: '100%',
		position: 'relative',
		opacity: 0.9,
		backgroundImage: 'url("noiseTest1.png")',
		backgroundBlendMode: 'overlay',
	},
	layer1: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		bottom: 0,
		backgroundColor: '#f2e2d7',
		zIndex: 1,
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
		backgroundImage: 'url("noiseTest1.png")',
		backgroundBlendMode: 'overlay',
	},
	layer2: {
		position: 'absolute',
		width: '80%',
		height: '90%',
		backgroundColor: '#ebd4c2',
		zIndex: 2,
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
		backgroundImage: 'url("noiseTest1.png")',
		backgroundBlendMode: 'overlay',
	},
	layer3: {
		position: 'absolute',
		width: '65%',
		height: '70%',
		backgroundColor: '#DEEEEB',
		zIndex: 3,
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
		backgroundImage: 'url("noiseTest1.png")',
		backgroundBlendMode: 'overlay',
	},
	textContainer: {
		position: 'absolute',
		width: '100%',
		bottom: 0,
		padding: '10px',
	},
};

const Rectangles: React.FC = () => {
	return (
		<div style={styles.container}>
			<div style={styles.leftSection}>
				<div style={styles.imageContainer}></div>
				<p
					style={{
						position: 'absolute',
						bottom: '5px',
						width: '100%',
						textAlign: 'center',
						fontSize: '6em',
						opacity: 0.6,
					}}>
					HEADSHOT STYLING
				</p>
			</div>
			<div style={styles.rightSection}>
				<div style={styles.layer1}>
					<div
						style={{
							...styles.textContainer,
							textAlign: 'right',
							fontSize: '3.5em',
							opacity: 0.6,
						}}>
						TESTIMONIALS
					</div>
				</div>
				<div style={styles.layer2}>
					<div
						style={{
							...styles.textContainer,
							textAlign: 'left',
							fontSize: '3.5em',
							opacity: 0.6,
						}}>
						COACHING
					</div>
				</div>
				<div style={styles.layer3}>
					<div
						style={{
							...styles.textContainer,
							textAlign: 'left',
							fontSize: '3.5em',
							opacity: 0.6,
						}}>
						CAREER <br />
						CONSULTATIONS
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rectangles;
