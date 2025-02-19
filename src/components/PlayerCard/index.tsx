import { ButtonIcon } from '../ButtonIcon'
import { Container, Icon, Name } from './styles'

type PlayerCardProps = {
  readonly name: string
  readonly onRemover: () => void
}

export function PlayerCard({ name, onRemover }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemover} />
    </Container>
  )
}
