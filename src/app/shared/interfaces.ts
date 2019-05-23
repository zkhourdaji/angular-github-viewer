export interface IContact {
  name: string;
  phone: string;
  id: number;
}

export interface IRepo {
  id: number;
  name: string;
}

export interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  followers: number;
  following: number;
  repos_url: string;
}
