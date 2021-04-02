import React, { useState } from 'react';
import styled from 'styled-components';
import { IUser } from '../../store/users/types';
import { Card, CardActions, CardContent, IconButton, TextField } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';

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
  updateUser(user: IUser): void;
  deleteUser(id: number): void;
}

function DetailCard(props: IDetailProps) {
  const [isAvailabe, setIsAvailabe] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const getFormatData = (): IUser => {
    return {
      id: props.user.id,
      first_name: firstName ? firstName : props.user.first_name,
      last_name: lastName ? lastName : props.user.last_name,
      avatar: props.user.avatar,
      email: email ? email : props.user.email,
    };
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
              label="Nombre"
              defaultValue={props.user.first_name}
              disabled={!isAvailabe}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <StyledInput
              label="Apellido"
              defaultValue={props.user.last_name}
              disabled={!isAvailabe}
              onChange={(e) => setLastName(e.target.value)}
            />
            <StyledInput
              label="Email"
              defaultValue={props.user.email}
              disabled={!isAvailabe}
              onChange={(e) => setEmail(e.target.value)}
            />
          </StyledCardContent>
          <CardActions>
            <IconButton aria-label="delete" onClick={() => props.deleteUser(props.user.id)}>
              <DeleteForeverOutlinedIcon fontSize="large" color="secondary" />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => setIsAvailabe(!isAvailabe)}>
              <CreateIcon fontSize="large" />
            </IconButton>
            <IconButton disabled={!isAvailabe} onClick={() => props.updateUser(getFormatData())}>
              <SaveIcon fontSize="large" color="primary" />
            </IconButton>
          </CardActions>
        </StyledCard>
      </div>
    </div>
  );
}

export default DetailCard;
