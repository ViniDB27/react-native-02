import { useState } from 'react'
import { GroupCard } from '../../components/GroupCard'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { FlatList } from 'react-native'
import { Highlight } from '../../components/Highlight'
import { EmptyList } from '../../components/EmptyList'
import { Button } from '../../components/Button'

import { useNavigation } from '@react-navigation/native'

export function Groups() {
  const navigation = useNavigation()
  const [groups, setGoups] = useState([])

  function handleNewGroup() {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard key={item} title={item} onPress={() => {}} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}
