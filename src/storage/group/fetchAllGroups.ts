import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLETCION } from '../storageConfig'

export async function fetchAllGroups() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLETCION)
    const groups: string[] = storage ? JSON.parse(storage) : []
    return groups
  } catch (error) {
    throw error
  }
}
