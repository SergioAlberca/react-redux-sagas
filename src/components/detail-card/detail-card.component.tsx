import React, { useState } from 'react';
import styled from 'styled-components';
import { IUser } from '../../store/users/types';
import { Card, CardActions, CardContent, IconButton, TextField } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch } from 'react-redux';
import { fetchDeleteUser } from '../../store/users/actions';

const StyledImg = styled.img`
  width: 85%;
`;

const StyledCard = styled(Card)`
  text-align: center;
  border: 2px solid red;
  border: 2px solid red;
  -webkit-box-shadow: 15px 9px 22px 9px rgba(0, 0, 0, 0.75) !important;
  -moz-box-shadow: 15px 9px 22px 9px rgba(0, 0, 0, 0.75) !important;
  box-shadow: 15px 9px 22px 9px rgba(0, 0, 0, 0.75) !important;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledInput = styled(TextField)`
  margin-bottom: 20px !important;
`;

interface IDetailProps {
  user: IUser;
}

function DetailCard(props: IDetailProps) {
  const dispatch = useDispatch();

  const [isAvailabe, setIsAvailabe] = useState<boolean>(false);

  const deleteUser = (id: number) => {
    dispatch(fetchDeleteUser({ id }));
  };

  return (
    <div className="row">
      <div className="col-five">
        <StyledCard>
          <CardContent>
            <StyledImg src={props.user.avatar} />
          </CardContent>
        </StyledCard>
      </div>
      <div className="col-seven">
        <StyledCard>
          <StyledCardContent>
            <StyledInput
              id="standard-basic"
              label="Nombre"
              defaultValue={props.user.first_name}
              disabled={!isAvailabe}
            />
            <StyledInput
              id="standard-basic"
              label="Apellido"
              defaultValue={props.user.last_name}
              disabled={!isAvailabe}
            />
            <StyledInput
              id="standard-basic"
              label="Email"
              defaultValue={props.user.email}
              disabled={!isAvailabe}
            />
          </StyledCardContent>
          <CardActions>
            <IconButton aria-label="delete" onClick={() => deleteUser(props.user.id)}>
              <DeleteForeverOutlinedIcon fontSize="large" color="secondary" />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => setIsAvailabe(!isAvailabe)}>
              <CreateIcon fontSize="large" />
            </IconButton>
            <IconButton disabled={!isAvailabe}>
              <SaveIcon fontSize="large" color="primary" />
            </IconButton>
          </CardActions>
        </StyledCard>
      </div>
    </div>
  );
}

export default DetailCard;
