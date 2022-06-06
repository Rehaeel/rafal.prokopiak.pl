import styles from './welcome.module.css';

const Welcome = () => (
	<div className={styles['welcome-section']}>
		<div className={styles.greeting}>
			<h1>prokopiak.pl</h1>
			<p>by ukazać piękno</p>
		</div>
	</div>
);

export default Welcome;
