import {
  LOCAL_STORAGE_USER,
  UserLocalStorageModel,
} from "../components/Login/model"

export function insertUserInLocalStorage(user?: UserLocalStorageModel) {
  if (user) {
    localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user))
  }
}

export function getUserInLocalStorage() {
  const user = localStorage.getItem(LOCAL_STORAGE_USER)
  if (user) return JSON.parse(user) as UserLocalStorageModel
  else return null
}

export function cleanUserLocalStorage() {
  localStorage.removeItem(LOCAL_STORAGE_USER)
}
