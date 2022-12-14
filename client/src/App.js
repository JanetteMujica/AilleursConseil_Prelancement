// node packages
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import GlobalStyles from './components/GlobalStyles';
import NavBar from './components/NavBar';
import Equipe from './pages/Equipe';
import Home from './pages/Home';
import Programme from './pages/Programme/Index';
import Module from './pages/Programme/Module';
import Footer from './components/Footer';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/programme' element={<Programme />} />
				<Route path='/programme/:title' element={<Module />} />
				<Route path='/equipe' element={<Equipe />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
