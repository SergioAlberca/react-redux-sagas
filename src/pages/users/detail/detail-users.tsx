import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DetailCard from '../../../components/detail-card/detail-card.component';
import { fetchDeleteUser, fetchUpdateUser } from '../../../store/users/actions';
import { getUserSelector } from '../../../store/users/selectors';
import { IUser } from '../../../store/users/types';

function DetailUsersPage(props: any) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = props.match.params;
  const user = useSelector(getUserSelector);

  const updateUser = (user: IUser) => {
    dispatch(fetchUpdateUser({ user }));
  };

  const deleteUser = (id: number) => {
    dispatch(fetchDeleteUser({ id }, history));
  };

  const getUser = (): IUser => {
    return user.find((item: IUser) => item.id === parseInt(id));
  };

  return (
    <div className="app-container">
      {user && (
        <DetailCard user={getUser()} updateUser={updateUser} deleteUser={deleteUser}></DetailCard>
      )}
    </div>
  );
}

export default DetailUsersPage;
