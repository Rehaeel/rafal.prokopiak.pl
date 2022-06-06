import Image from 'next/image';
import styles from './crew.module.css';
import { CrewList } from './crew-list';

const Crew = () => {
	return (
		<div className={styles['crew-section']}>
			<span>
				<h1 className='headers'>Nasz zespół</h1>
			</span>
			{CrewList.map((crew) => (
				<div key={crew.id} className={styles.crew}>
					<Image
						className={styles[`${crew.className}`]}
						src={crew.img}
						alt='Zdjęcie zespołu'
						height={260}
						width={260}
					/>
					<h3>{crew.title}</h3>
					<p>{crew.author}</p>
				</div>
			))}
		</div>
	);
};

export default Crew;
