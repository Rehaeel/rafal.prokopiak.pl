import GoUp from '../components/go-up/go-up';
import Menu from '../components/menu/menu';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Menu />
			<Component {...pageProps} />
			<GoUp />
		</>
	);
}

export default MyApp;
