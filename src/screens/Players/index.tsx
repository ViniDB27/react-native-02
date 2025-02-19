import { FlatList } from 'react-native'
import { useState } from 'react'

import { ButtonIcon } from '../../components/ButtonIcon'
import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { Input } from '../../components/Input'
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'
import { PlayerCard } from '../../components/PlayerCard'
import { EmptyList } from '../../components/EmptyList'
import { Button } from '../../components/Button'
import { useRoute } from '@react-navigation/native'

type RouteParams = {
  group: string
}

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [newPlayer, setNewPlayer] = useState('')
  const [players, setPlayers] = useState<string[]>([])

  const route = useRoute()
  const { group } = route.params as RouteParams

  function handleAddNewPlayer() {
    setPlayers((state) => [...state, newPlayer])
    setNewPlayer('')
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adcione a galera e separe os times" />
      <Form>
        <Input
          placeholder="Nome da Pessoa"
          value={newPlayer}
          onChangeText={setNewPlayer}
          autoCorrect={false}
        />
        <ButtonIcon icon="add" onPress={handleAddNewPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          horizontal
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              onPress={() => setTeam(item)}
              isActive={team === item}
            />
          )}
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemover={() => {}} />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="Não há pessoas nesse time" />
        )}
        contentContainerStyle={[
          {
            paddingBottom: 100,
          },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  )
}
