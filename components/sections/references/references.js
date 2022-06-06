import Link from 'next/link';
import Image from 'next/image';

import styles from './references.module.css';
import { ReferencesList } from './references-list.js';

const References = () => {
	return (
		<div className={styles['references-section']}>
			<span>
				<h1 className='headers'>Niech wypowiedzą się inni</h1>
			</span>
			{ReferencesList.map((reference) => (
				<div key={reference.id} className={styles.reference}>
					<Image
						width={90}
						height={90}
						key={reference.id}
						src={reference.img}
						alt='zdjęcie referanta'
					/>
					<p>{reference.text}</p>
					<h3>{reference.author}</h3>
					<Link href={reference.link}>
						<a
							target='_blank'
							rel='noreferrer'
							style={{ cursor: 'pointer' }}>
							{reference.source}
						</a>
					</Link>
				</div>
			))}
		</div>
	);
};

export default References;
