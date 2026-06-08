import {Request } from 'express'
import { IUserDetail } from './User';

export interface IAuthRequest extends  Request {
    loggedInUser?: IUserDetail
}