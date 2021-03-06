import { useEffect } from 'react';
import Image from 'next/image';

import styles from '../styles/about-me-page.module.css';

import Footer from '../components/footer/footer';
import FilmSet from '../public/images/plan-filmowy.webp';
import FilmSet2 from '../public/images/plan-filmowy_2.webp';
import FilmSet3 from '../public/images/plan-filmowy_3.webp';
import FilmSet4 from '../public/images/plan-filmowy_4.webp';
import FilmSet5 from '../public/images/plan-filmowy_5.webp';
import FilmSet6 from '../public/images/plan-filmowy_6.webp';
import FilmSet7 from '../public/images/plan-filmowy_7.webp';
import ReactGA from 'react-ga';

import Button from '../components/button/button';

const AboutMeSite = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div>
			<div className={styles.genesis} id='about-me-page'>
				<div className={styles.genesis1}>
					<h1>Początkiem było marzenie</h1>
					<p>
						Pomysł na realizacje filmowe powstał w głowie małego
						chłopca zafascynowanego filmami akcji i science-fiction.
						Dziś to kilkuosobowy zespół połączony tymi samymi
						wartościami. Przedstawiłem żartobliwie zespół jako jedna
						osoba zmieniająca tylko czapki, ponieważ sam musiałem
						się nauczyć wszystkiego od zera. Bierzemy udział w
						większych planach filmowych dlatego też szeroki zakres
						umiejętności jest bardzo pożądany.{' '}
					</p>
				</div>

				<div id={styles['film-set-3']}>
					<Image src={FilmSet3} alt='' />
				</div>
				<div id={styles['film-set-4']}>
					<Image src={FilmSet4} alt='' />
				</div>

				<div className={styles.genesis2}>
					<p>
						Będąc jeszcze młodzieńcem nagrywałem i montowałem
						filmiki z wakacji, jednak bardziej poważne podejście do
						zawodu nabrałem przeprowadzając się do Łodzi w 2017
						roku.
					</p>
					<ul>
						<li>
							W kwietniu 2018 roku zatrudniła mnie katolicka
							fundacja Mocni w Duchu na stanowisko medialne gdzie
							przygotowałem w półtorej roku ponad 500 materiałów
							wideo od nagrania do publikacji.
						</li>
						<li>
							W 2018 oraz 2019 roku asystowałem na egzaminach I
							roku aktorstwa w szkole filmowej jako asystent
							operatora.
						</li>
						<li>
							Po nawiązaniu współpracy ze Spółką Direct Share
							Media uczestniczyłem w licznych planach filmowych na
							przestrzeni 2 lat. Skutecznie zrealizowaliśmy filmy
							reklamowe dla firm jak: Gizo, Art of Packaging,
							Jelenie Jaja.
						</li>
						<li>
							W 2020 roku brałem udział jako asystent operatora w
							serialu „Jonasz z 2b” pod kierownictwem o. Adama
							Szustaka.
						</li>
						<li>
							Wciąż trwająca współpraca z Eteroplan oraz
							Transmisje na żywo owocuje u naszych partnerów
							większą rozpoznawalnością w mediach. Prowadzimy
							relacje z wydarzeń, transmisje na żywo oraz
							realizujemy filmy promocyjne.
						</li>
					</ul>
				</div>
				<div className={styles.gallery}>
					<div>
						<Image src={FilmSet6} alt='' />
					</div>
					<div>
						<Image src={FilmSet} alt='' />
					</div>
					<div>
						<Image src={FilmSet2} alt='' />
					</div>
					<div>
						<Image src={FilmSet5} alt='' />
					</div>
					<div>
						<Image src={FilmSet7} alt='' />
					</div>
				</div>
			</div>
			<div className={styles['about-me-cta']}>
				<h1>Zapraszam do kontaktu</h1>
				<p>
					Teraz już znasz mnie lepiej. Jeżeli jesteś zainteresowany
					rozpoczęciem współpracy, służę pomocą. Nasz zespół dopełni
					wszelkich starań by dostarczyć najlepszej jakości usługi.
				</p>
				<Button link='/#contact'>Kontakt</Button>
			</div>
			<Footer />
		</div>
	);
};

export default AboutMeSite;
