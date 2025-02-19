import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { useState } from 'react'

import { Container, Content, Icon } from './styles'

import { createGroup } from '../../storage/group/createGroup'
import { Highlight } from '../../components/Highlight'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { AppError } from '../../utils/AppErrors'

export function NewGroups() {
  const [group, setGroup] = useState<string>('')
  const navigation = useNavigation()

  async function handleNew() {
    try {
      const isEmptyGroupName = group.trim().length === 0
      if (isEmptyGroupName) return Alert.alert('Novo Grupo', 'Informe o nome da turma')
      await createGroup(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) return Alert.alert('Novo Grupo', error.message)
      Alert.alert('Novo Grupo', 'Não foi possivel criar o novo grupo')
      console.error(error)
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="Nova Turma" subtitle="crie a turma para adcionar as pessoas" />
        <Input placeholder="Nome da turma" value={group} onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  )
}
