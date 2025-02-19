import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLETCION } from '../storageConfig'
import { fetchAllGroups } from './fetchAllGroups'
import { AppError } from '../../utils/AppErrors'

export async function createGroup(newGroup: string) {
  try {
    const groups = await fetchAllGroups()
    const isSameGroup = groups.includes(newGroup)
    if (isSameGroup) throw new AppError('Já existe um grupo cadastrado com esse nome')
    await AsyncStorage.setItem(GROUP_COLLETCION, JSON.stringify([...groups, newGroup]))
  } catch (error) {
    throw error
  }
}
