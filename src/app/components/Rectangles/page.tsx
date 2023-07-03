import React from 'react';
import styles from './Rectangles.module.css';

const Rectangles: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.leftSection}>
				<div className={styles.imageContainer}></div>
				<p className={styles.text}>HEADSHOT STYLING</p>
			</div>
			<div className={styles.rightSection}>
				<div className={styles.layer1}>
					<div className={styles.textContainer}>TESTIMONIALS</div>
				</div>
				<div className={styles.layer2}>
					<div className={styles.textContainer}>COACHING</div>
				</div>
				<div className={styles.layer3}>
					<div className={styles.textContainer}>
						CAREER <br />
						CONSULTATIONS
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rectangles;
