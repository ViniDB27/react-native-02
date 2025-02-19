import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import { Container, Content, Icon } from './styles'

import { Highlight } from '../../components/Highlight'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

export function NewGroups() {
  const [group, setGroup] = useState<string>('')
  const navigation = useNavigation()

  function handleGoPalyers() {
    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie a turma para adcionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleGoPalyers}
        />
      </Content>
    </Container>
  )
}
