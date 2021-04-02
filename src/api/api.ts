import axios from 'axios';
import { IFetchLoginPayload } from '../store/auth/types';
import { IUsers } from '../store/users/types';

export const login = (data: IFetchLoginPayload) => axios.post('https://reqres.in/api/login', data);

export const getUsers = (page: number) =>
  axios.get<IUsers>(`https://reqres.in/api/users?page=${page}`);
