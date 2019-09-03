
export interface UserModel {
  email: string;
  username: string;
  fullname: string;
  password: string;
  phone: string;
  isStaff: boolean;
  isClient: boolean;
  moneyAvailable: number;
  moneySpent: number;
  historic: any;
  chat: any;
}
