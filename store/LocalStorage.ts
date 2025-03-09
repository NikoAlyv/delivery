import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StorageKeys,
  StorageMethodsKeys,
  TFunctionalMethod,
} from '../types/localstorage.types';
import { IUser } from '../types/user';

export class LocalStorage {
  private static async set(
    key: StorageKeys,
    method: StorageMethodsKeys,
    data?: any
  ) {
    try {
      if (['string', 'number', 'boolean'].includes(method)) {
        await AsyncStorage.setItem(key, String(data));
      } else if (['object', 'array'].includes(method)) {
        await AsyncStorage.setItem(key, JSON.stringify(data));
      } else {
        throw new Error("LocalStorage method isn't supported");
      }
    } catch (error) {
      console.error('Error setting item in AsyncStorage:', error);
    }
  }

  public static async user(method: TFunctionalMethod, data?: IUser) {
    try {
      if (method === 'get') {
        const user = await AsyncStorage.getItem(StorageKeys.user);
        return user ? JSON.parse(user) : null;
      }
      await this.set(StorageKeys.user, 'object', data);
    } catch (error) {
      console.error('Error handling user in AsyncStorage:', error);
    }
  }

  public static async clean(key: StorageKeys | StorageKeys[] | 'all') {
    try {
      if (key === 'all') {
        await AsyncStorage.clear();
      } else if (Array.isArray(key)) {
        await AsyncStorage.multiRemove(key);
      } else {
        await AsyncStorage.removeItem(key);
      }
      console.log(`AsyncStorage cleaned: ${key}`);
    } catch (error) {
      console.error('Error cleaning AsyncStorage:', error);
    }
  }
}
