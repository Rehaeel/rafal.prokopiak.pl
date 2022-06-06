import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';
import Facebook from '../icons/facebook.svg';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<p>
				Created & designed with ♥ by{' '}
				<Link href='https://www.facebook.com/rafalprokopiak.visuals'>
					<b style={{ cursor: 'pointer' }}>Rafał Prokopiak</b>
				</Link>
			</p>
			<Link
				href='https://www.facebook.com/rafalprokopiak.visuals'
				target='_blank'
				rel='noreferrer'>
				<Image
					width={17}
					height={36}
					src={Facebook}
					alt='Facebook link'
					layout='fixed'
					style={{ cursor: 'pointer' }}
				/>
			</Link>
		</div>
	);
};

export default Footer;
