import { Container, BackButton, BackIcon, Logo } from './styles'

import logoImg from '../../assets/logo.png'

interface HeaderProps {
  readonly showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
