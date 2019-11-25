import { IUser } from '../interfaces/user.interface';

export class User implements IUser{
    constructor(
        public id: number,
        public fName: string,
        public lName: string,
        public numPhone: string
    ){}
}