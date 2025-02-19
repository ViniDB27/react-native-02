import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLETCION, PLAYER_COLLETCION } from '../storageConfig'
import { fetchAllGroups } from './fetchAllGroups'

export async function removeGroup(deletedGroup: string) {
  try {
    await AsyncStorage.removeItem(`${PLAYER_COLLETCION}-${deletedGroup}`)
    const allGroups = await fetchAllGroups()
    const groups = allGroups.filter((gp) => gp !== deletedGroup)
    await AsyncStorage.setItem(GROUP_COLLETCION, JSON.stringify(groups))
  } catch (error) {
    throw error
  }
}
