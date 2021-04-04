import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../../../store/users/actions";
import {
  getActualPageSelector,
  getErrorSelector,
  getPendingSelector,
  getTotalPageSelector,
  getUserSelector,
} from "../../../store/users/selectors";
import CardItem from "../../../components/card-item/card-item.components";
import { IUser } from "../../../store/users/types";
import Spinner from "../../../components/spinner/spinner";
import AlertCustom from "../../../components/alert/alert.component";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function ListUsersPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const users = useSelector(getUserSelector);
  const pending = useSelector(getPendingSelector);
  const error = useSelector(getErrorSelector);
  const totalPages = useSelector(getTotalPageSelector);
  const actualPage = useSelector(getActualPageSelector);

  const getPage = (): number => {
    if (totalPages === 0) return actualPage;
    return actualPage + 1;
  };

  const loadData = () => {
    dispatch(fetchUsersRequest(getPage()));
  };

  const goToDetail = (id: number) => {
    history.push({ pathname: `/detail-users/${id}`, state: { id } });
  };

  useEffect(() => {
    if (users.length <= 0) {
      loadData();
    }
  }, []);

  return (
    <div className="app-container">
      {users.length > 0 && (
        <div className="row">
          {users.map((item: IUser, index: number) => {
            return (
              <div className="col-four" key={index}>
                <CardItem user={item} goToDetail={goToDetail}></CardItem>
              </div>
            );
          })}
        </div>
      )}
      {actualPage < totalPages && (
        <Button variant="contained" color="primary" onClick={() => loadData()}>
          Cargar más
        </Button>
      )}
      {pending && <Spinner />}
      {error && <AlertCustom message={error} />}
    </div>
  );
}

export default ListUsersPage;
