import { IUser } from "../IUserInterface";

export interface IAuthenticateResponse {
    user: IUser
    token: string
}