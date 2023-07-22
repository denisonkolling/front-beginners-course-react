import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import About from './pages/About';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />} />
      </Routes>
		</>
	);
}

export default App;
