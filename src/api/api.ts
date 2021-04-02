import axios from 'axios';
import { IFetchLoginPayload } from '../store/auth/types';
import { IUsers } from '../store/users/types';

export const getUsers = (page: number) =>
  axios.get<IUsers>(`https://reqres.in/api/users?page=${page}`);

export const login = (data: IFetchLoginPayload) => axios.post('https://reqres.in/api/login', data);

export const getDetailUser = (id: number) => axios.get(`https://reqres.in/api/users/${id}`);

export const deleteUser = (id: number) => axios.delete(`https://reqres.in/api/users/${id}`);

export const updateUser = (id: number) => axios.put(`https://reqres.in/api/users/${id}`);
