import Link from 'next/link';
import styles from './button.module.css';

const Button = (props) => {
	return (
		<Link href={props.link}>
			<button className={styles.btn}>{props.children}</button>
		</Link>
	);
};

export default Button;
