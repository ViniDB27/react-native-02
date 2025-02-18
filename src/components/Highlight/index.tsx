import { Container, Subtitle, Title } from './styles'

interface Highlight {
  readonly title: string
  readonly subtitle: string
}

export function Highlight({ title, subtitle }: Highlight) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
