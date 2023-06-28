import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './SocialMediaBar.css';

const SocialMediaBar: React.FC = () => {
	return (
		<div className='social-media-bar'>
			<FaFacebook className='social-icon' />
			<FaTwitter className='social-icon' />
			<FaInstagram className='social-icon' />
			<FaYoutube className='social-icon' />
		</div>
	);
};

export default SocialMediaBar;
