import Link from 'next/link';
import Image from 'next/image';

import styles from './realization-view.module.css';
import PlayButton from '../../../icons/play-button.svg';
import { realizationList } from './realization-list.js';

const RealizationView = () => {
	return (
		<>
			{realizationList.map((realization) => (
				<div
					key={realization.id}
					className={styles['realization-view']}>
					<div>
						<Link key={realization.id} href={realization.link}>
							<a
								target='_blank'
								rel='noreferrer'
								className={styles['realization-cover']}>
								<div className={styles['play-button']}>
									<Image
										src={PlayButton}
										alt='Włączenie filmiku'
										width={100}
										height={100}
										layout='fixed'
									/>
								</div>
								<div
									className={styles['realization-cover-img']}>
									<Image
										src={realization.img}
										alt='Zdjęcie realizacji'
									/>
								</div>
							</a>
						</Link>
					</div>
					<p>{realization.subTitle}</p>
					<h2>{realization.title}</h2>
					<Link href={realization.link}>
						<a
							target='_blank'
							rel='noreferrer'
							className={styles.button}>
							ZOBACZ
						</a>
					</Link>
				</div>
			))}
		</>
	);
};

export default RealizationView;
