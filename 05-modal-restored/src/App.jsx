import { useState } from 'react';
import './App.css';
import Modal from './components/modal';

function App() {
	const [openModal, setOpenModal] = useState(false);
	const [openSecondModal, setSecondOpenModal] = useState(false);

	return (
		<>
			<div className="App">
				<h1>Modal Use</h1>
				<div>
					<button onClick={() => setOpenModal(true)}>
						Abrir Modal Principal
					</button>
				</div>
				<br />
				<div>
					<button onClick={() => setSecondOpenModal(true)}>
						Abrir Modal Secundário
					</button>
				</div>
				<Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
					<p>Conteúdo do modal primário...</p>
				</Modal>
				<Modal
					isOpen={openSecondModal}
					setModalOpen={() => setSecondOpenModal(!openSecondModal)}>
					<p>Conteúdo do modal secundário...</p>
				</Modal>
			</div>
		</>
	);
}

export default App;
