import styles from './menu.module.css';

import Link from 'next/link';
import Image from 'next/image';

import Logo from '../logo/Logo.webp';

const Menu = () => {
	return (
		<div className={styles.menu}>
			<Link href='/'>
				<Image
					src={Logo}
					alt=''
					priority
					layout='fixed'
					width={80}
					height={80}
				/>
			</Link>
			<div className={styles.tabs}>
				<Link href='/o-mnie'>
					<h2>O mnie</h2>
				</Link>
				<Link href='/#realizations'>
					<h2>Realizacje</h2>
				</Link>
				<Link href='/#contact'>
					<h2>Kontakt</h2>
				</Link>
			</div>
		</div>
	);
};

export default Menu;
