import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import { IUser } from '../../store/users/types';

const StyledCard = styled(Card)`
  margin: 20px;
  text-align: center;
  padding: 10px !important;
  border: 2px solid red;
`;

const StyledCardAction = styled(CardActions)`
  justify-content: center;
`;

interface Props {
  user: IUser;
  goToDetail: any;
}

function CardItem(props: Props) {
  return (
    <StyledCard>
      <CardContent>
        <img src={props.user.avatar} />
        <h2>{props.user.first_name}</h2>
        <h5>{props.user.email}</h5>
      </CardContent>
      <StyledCardAction>
        <Button variant="contained" color="primary" onClick={() => props.goToDetail(props.user.id)}>
          Ver Detalle
        </Button>
      </StyledCardAction>
    </StyledCard>
  );
}

export default CardItem;
