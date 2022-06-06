import React from 'react';
import styles from './go-up.module.css';

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const GoUp = () => {
	return (
		<div className={styles['go-up']} onClick={topFunction}>
			˄
		</div>
	);
};

export default GoUp;
