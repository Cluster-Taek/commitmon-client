export interface IUser {
  id: number;
  name: string;
  totalCommitCount: number;
  commitmon: string;
  exp: number;
}

export interface IUserWithFollowers extends IUser {
  followers: IUser[];
  following: IUser[];
}
