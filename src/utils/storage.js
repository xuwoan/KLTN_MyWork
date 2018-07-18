/**
 * Helper to Save, Load, Delete data from local storage
 */

import { AsyncStorage } from 'react-native';

export async function setItem(...args) {
    await AsyncStorage.setItem(...args);
}

export async function getItem(...args) {
    return await AsyncStorage.getItem(...args);
}

export async function removeItem(...args) {
    await AsyncStorage.removeItem(...args);
}
