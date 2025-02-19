import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { Alert, FlatList, TextInput } from 'react-native'
import { useCallback, useState, useRef } from 'react'

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'

import { removePlayerOnGroup } from '../../storage/player/removePlayerOnGroup'
import { fetchPlayersByGroup } from '../../storage/player/fetchPlayersByGroup'
import { addPlayerOnGroup } from '../../storage/player/addPlayerOnGroup'

import { AppError } from '../../utils/AppErrors'

import { ButtonIcon } from '../../components/ButtonIcon'
import { PlayerCard } from '../../components/PlayerCard'
import { Highlight } from '../../components/Highlight'
import { EmptyList } from '../../components/EmptyList'
import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { removeGroup } from '../../storage/group/removeGroupByName'

type RouteParams = {
  group: string
}

type player = {
  name: string
  team: string
}

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [name, setName] = useState('')
  const [players, setPlayers] = useState<player[]>([])

  const navigation = useNavigation()
  const newPlayerNameInputRef = useRef<TextInput>(null)
  const route = useRoute()
  const { group } = route.params as RouteParams

  async function handleAddNewPlayer() {
    try {
      const isEmptyPlayerName = name.trim().length === 0
      if (isEmptyPlayerName) return Alert.alert('Novo player', 'Informe o nome do player')
      const newPlayer = { name, team }
      await addPlayerOnGroup(newPlayer, group)
      setPlayers((state) => [...state, newPlayer])
      newPlayerNameInputRef.current?.blur()
      setName('')
    } catch (error) {
      if (error instanceof AppError) return Alert.alert('Novo player', error.message)
      Alert.alert('Novo player', 'Não foi possivel adcionar o palyer')
      console.error(error)
    }
  }

  async function handleRemovePlayer(player: player) {
    await removePlayerOnGroup(player, group)
    setPlayers((state) => state.filter((p) => p.name !== player.name))
  }

  async function handleRemoveGroup() {
    await removeGroup(group)
    navigation.navigate('groups')
  }

  async function fetchPlayers() {
    const storagePlayers = await fetchPlayersByGroup(group)
    setPlayers(storagePlayers)
  }

  useFocusEffect(
    useCallback(() => {
      fetchPlayers()
    }, [])
  )

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adcione a galera e separe os times" />
      <Form>
        <Input
          placeholder="Nome da Pessoa"
          value={name}
          onChangeText={setName}
          autoCorrect={false}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddNewPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddNewPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          horizontal
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Filter title={item} onPress={() => setTeam(item)} isActive={team === item} />}
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={players.filter((p) => p.team === team)}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PlayerCard name={item.name} onRemover={() => handleRemovePlayer(item)} />}
        ListEmptyComponent={() => <EmptyList message="Não há pessoas nesse time" />}
        contentContainerStyle={[
          {
            paddingBottom: 100,
          },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover Turma" type="SECONDARY" onPress={handleRemoveGroup} />
    </Container>
  )
}
