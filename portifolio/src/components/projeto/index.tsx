import Paragrafo from '../Paragrafo'
import Title from '../title'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Title> Projeto lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de Tarefas feitas com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
