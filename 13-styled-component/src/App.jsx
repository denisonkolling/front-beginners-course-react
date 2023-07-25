import {Button2, StyledButton} from './components/Button.style'
import { Wrapper } from './components/Wrapper.style'

function App() {

  return (
    <Wrapper>
     <StyledButton backgroundColor='blue' onClick={()=>console.log('salvou!')}>Salvar</StyledButton>
     <StyledButton backgroundColor='green'onClick={()=>console.log('editou!')}>Editar</StyledButton>
     <StyledButton backgroundColor='red' onClick={()=>console.log('excluiu!')}>Excluir</StyledButton>
     <StyledButton  onClick={()=>console.log('excluiu!')}>Excluir</StyledButton>
     <a href="#">Fechar pedido</a>
     <Button2>Import</Button2>
    </Wrapper>
  )
}

export default App
