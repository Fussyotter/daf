import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	leftSection: {
		position: 'relative',
		width: '50%',
		height: '100%',
		backgroundColor: '#d1cfae',
	},
	imageContainer: {
		position: 'absolute',
		width: '40%',
		height: '60%',
		right: '0%',
		backgroundImage: `url('al5.jpeg')`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	rightSection: {
		width: '50%',
		height: '100%',
		position: 'relative',
	},
	layer1: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		bottom: 0,
		backgroundColor: '#f2e2d7',
		zIndex: 1,
	},
	layer2: {
		position: 'absolute',
		width: '80%',
		height: '90%',
		backgroundColor: '#ebd4c2',
		zIndex: 2,
	},
	layer3: {
		position: 'absolute',
		width: '65%',
		height: '70%',
		backgroundColor: '#d49e84',
		zIndex: 3,
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
						fontSize: '1.5em',
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
							fontSize: '1.5em',
						}}>
						TESTIMONIALS
					</div>
				</div>
				<div style={styles.layer2}>
					<div
						style={{
							...styles.textContainer,
							textAlign: 'left',
							fontSize: '1.5em',
						}}>
						COACHING
					</div>
				</div>
				<div style={styles.layer3}>
					<div
						style={{
							...styles.textContainer,
							textAlign: 'left',
							fontSize: '1.5em',
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
