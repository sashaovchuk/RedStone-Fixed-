import { IRequest } from '../interfaces/request.interface';

export class NewRequest implements IRequest{
    constructor(
        public email: string,
        public password: string
    ){}
}