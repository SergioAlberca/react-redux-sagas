import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AlertCustom from "../../../components/alert/alert.component";
import DetailCard from "../../../components/detail-card/detail-card.component";
import Spinner from "../../../components/spinner/spinner";
import {
  getErrorSelector,
  getPendingSelector,
} from "../../../store/auth/selectors";
import { fetchDeleteUser, fetchUpdateUser } from "../../../store/users/actions";
import { getUserSelector } from "../../../store/users/selectors";
import { IUser } from "../../../store/users/types";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { StyledBackButton } from "../../../components/styled-common-components/styled-common-components";

function DetailUsersPage(props: any) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = props.match.params;

  const user = useSelector(getUserSelector);
  const error = useSelector(getErrorSelector);
  const pending = useSelector(getPendingSelector);

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
      <StyledBackButton aria-label="delete" onClick={() => history.goBack()}>
        <ArrowBackIcon fontSize="large" color="secondary" />
      </StyledBackButton>
      {getUser() && (
        <DetailCard
          user={getUser()}
          updateUser={updateUser}
          deleteUser={deleteUser}
        ></DetailCard>
      )}
      {pending && <Spinner></Spinner>}
      {error && <AlertCustom message={error} />}
    </div>
  );
}

export default DetailUsersPage;
