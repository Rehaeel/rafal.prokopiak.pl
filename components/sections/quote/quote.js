import styles from './quote.module.css';

const Quote = () => (
	<div className={styles['quote-section']}>
		<div className={styles.quote}>
			<h1>“Piękno jest pierwszą kategorią moralną”</h1>
			<h1>~Jan Duns Szkot OFM</h1>
		</div>
	</div>
);

export default Quote;
