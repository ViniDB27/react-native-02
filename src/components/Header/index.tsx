import { Container, BackButton, BackIcon, Logo } from './styles'

import logoImg from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  readonly showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation()
  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
