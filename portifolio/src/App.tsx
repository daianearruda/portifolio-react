import { ThemeProvider } from 'styled-components'

import Sobre from './containers/Sobre'
import Projetos from './containers/projetos'
import Sidebar from './containers/sidebar'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstausandoTemaDarke] = useState(false)

  function trocaTema() {
    setEstausandoTemaDarke(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
