import { Title as TitleEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <TitleEstilo fontSize={props.fontSize}>{props.children}</TitleEstilo>
)

export default Title
