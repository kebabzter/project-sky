import { IUser } from './user';
export interface IProject{
    _id: string,
    title: string,
    description: string,
    imageUrl: string,
    owner: IUser,
    // likeList: string[]
}