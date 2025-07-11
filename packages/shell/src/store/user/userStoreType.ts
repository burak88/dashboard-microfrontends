export interface IUserData {
  name: string;
  isAuthenticated: boolean;
}

export interface IUserStore {
  userData: IUserData;
  setUser: (data: IUserData) => void;
}
