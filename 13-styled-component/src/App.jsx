import {StyledButton} from './components/Button.style'
import { Wrapper } from './components/Wrapper.style'

function App() {

  return (
    <Wrapper>
     <StyledButton onClick={()=>console.log('clicou!')}>Salvar</StyledButton>
    </Wrapper>
  )
}

export default App
