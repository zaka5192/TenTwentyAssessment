import AsyncStorage from '@react-native-async-storage/async-storage';

interface KEYS_INTERFACE {
  MOVIES: string;
}

export const ASYNC_KEYS: KEYS_INTERFACE = {
  MOVIES: '@tmdb_movies',
};

export const saveValueInAsync = async (
  key: keyof KEYS_INTERFACE,
  value: string,
) => {
  try {
    await AsyncStorage.setItem(ASYNC_KEYS[key], value);
  } catch (error) {
    throw error;
  }
};

export const getValueFromAsync = async (
  key: keyof KEYS_INTERFACE,
): Promise<string | null> => {
  try {
    const result = await AsyncStorage.getItem(ASYNC_KEYS[key]);
    return result;
  } catch (error) {
    throw error;
  }
};

export const removeValueFromAsync = async (key: keyof KEYS_INTERFACE) => {
  try {
    await AsyncStorage.removeItem(ASYNC_KEYS[key]);
  } catch (error) {
    throw error;
  }
};

export const clearAllAsync = async () => {
  await AsyncStorage.clear();
};
