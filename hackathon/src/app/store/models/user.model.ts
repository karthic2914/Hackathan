export interface User {
  user?: UserData;
}

export interface UserData {
  email: string;
  username: string;
  isAdmin: boolean;
  profile: {
    skillSet: string[]
  };
  isIdeaExist: boolean;
}
