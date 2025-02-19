import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '../../utils/AppErrors'
import { PLAYER_COLLETCION } from '../storageConfig'
import { PlayerStorageDTO } from './playerStorageDTO'
import { fetchPlayersByGroup } from './fetchPlayersByGroup'

export async function addPlayerOnGroup(newPlayers: PlayerStorageDTO, group: string) {
  try {
    const players = await fetchPlayersByGroup(group)
    const isSameName = players.filter((player) => player.name === newPlayers.name).length > 0
    if (isSameName) throw new AppError('Já existe um player com esse nome no grupo')
    const key = `${PLAYER_COLLETCION}-${group}`
    const storage = JSON.stringify([...players, newPlayers])
    await AsyncStorage.setItem(key, storage)
  } catch (error) {
    throw error
  }
}
