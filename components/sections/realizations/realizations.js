import { useState } from 'react';
import styles from './realizations.module.css';
import RealizationView from './realization-view/realization-view.js';

const Realizations = () => {
	const [maxHeight, setMaxHeight] = useState(700);

	const readMore = () => setMaxHeight('4000px');

	return (
		<div>
			<div
				className={styles.realizations}
				id='realizations'
				style={{ maxHeight: maxHeight }}>
				<h1 className='headers'>Realizacje</h1>
				<RealizationView />
			</div>
			<div className={styles.separator}>
				<h2
					className={styles['show-more']}
					style={{ display: maxHeight === 700 ? 'block' : 'none' }}
					onClick={readMore}>
					pokaż więcej
				</h2>
			</div>
		</div>
	);
};

export default Realizations;
