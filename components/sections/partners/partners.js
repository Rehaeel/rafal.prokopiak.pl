import Link from 'next/link';
import Image from 'next/image';

import { PartnerList } from './partner-list';
import styles from './partners.module.css';

const Partners = () => {
	return (
		<div className={styles.partners}>
			{PartnerList.map((partner) => (
				<Link key={partner.id} href={partner.link}>
					<a
						target='_blank'
						rel='noreferrer'
						className={styles.partner}>
						<Image
							src={partner.img}
							alt='Prokopiak Visuals partner'
						/>
					</a>
				</Link>
			))}
		</div>
	);
};

export default Partners;
