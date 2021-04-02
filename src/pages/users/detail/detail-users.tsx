import React, { useEffect, useState } from 'react';
import { getDetailUser } from '../../../api/api';
import DetailCard from '../../../components/detail-card/detail-card.component';
import { IUser } from '../../../store/users/types';

function DetailUsersPage(props: any) {
  const { id } = props.match.params;
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    getDetailUser(parseInt(id)).then((data) => {
      setUser(data.data.data);
    });
  }, []);

  return <div className="app-container">{user && <DetailCard user={user}></DetailCard>}</div>;
}

export default DetailUsersPage;
