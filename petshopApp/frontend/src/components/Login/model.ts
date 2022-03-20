export const LOCAL_STORAGE_USER = "@petshopApp/loggedUser"

export interface UserLocalStorageModel {
  refreshToken?: string | null
  accessToken?: string | null
  id?: number | null
}

export interface LoginFormModel {
  username: string
  password: string
}
