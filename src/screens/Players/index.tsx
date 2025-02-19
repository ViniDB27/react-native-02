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

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([
    'Vinicio',
    'Rodrigo',
    'Diego',
    'Ana',
    'Biro',
    'Mayk',
    'Vitoria',
    'Guto',
    'Maria',
    'Isis',
    'Amanda',
  ])
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="adcione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da Pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
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
      <Button 
        title='Remover Turma'
        type='SECONDARY'
      />
    </Container>
  )
}
