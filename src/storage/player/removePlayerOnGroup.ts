import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLETCION } from '../storageConfig'
import { PlayerStorageDTO } from './playerStorageDTO'
import { fetchPlayersByGroup } from './fetchPlayersByGroup'

export async function removePlayerOnGroup(deltedPlayer: PlayerStorageDTO, group: string) {
  try {
    const allPlayers = await fetchPlayersByGroup(group)
    const players = allPlayers.filter((player) => player.name !== deltedPlayer.name)
    const key = `${PLAYER_COLLETCION}-${group}`
    const storage = JSON.stringify(players)
    await AsyncStorage.setItem(key, storage)
  } catch (error) {
    throw error
  }
}
