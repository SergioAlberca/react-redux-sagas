import { FetchUpdateUserRequest, IUser } from '../store/users/types';

export const setUsers = (users: IUser[], data: FetchUpdateUserRequest) => {
  debugger;
  const newData = JSON.parse(JSON.stringify(users));
  const { id, first_name, last_name, email } = data.payload.user;
  const index = newData.findIndex((user: IUser) => user.id === id);

  newData[index].first_name = first_name;
  newData[index].last_name = last_name;
  newData[index].email = email;

  return newData;
};
