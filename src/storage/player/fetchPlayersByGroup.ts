import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLETCION } from '../storageConfig'
import { PlayerStorageDTO } from './playerStorageDTO'

export async function fetchPlayersByGroup(group: string) {
  try {
    const playersStorage = await AsyncStorage.getItem(`${PLAYER_COLLETCION}-${group}`)
    const players: PlayerStorageDTO[] = playersStorage ? JSON.parse(playersStorage) : []
    return players
  } catch (error) {
    throw error
  }
}
