import React from "react";
import { CardContent, Button } from "@material-ui/core";
import { IUser } from "../../store/users/types";
import {
  StyledCardActionItem,
  StyledCardItem,
} from "../styled-common-components/styled-common-components";

interface Props {
  user: IUser;
  goToDetail(value: number): void;
}

function CardItem(props: Props) {
  return (
    <StyledCardItem>
      <CardContent>
        <img src={props.user.avatar} />
        <h2>{props.user.first_name}</h2>
        <h4>{props.user.last_name}</h4>
        <h5>{props.user.email}</h5>
      </CardContent>
      <StyledCardActionItem>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.goToDetail(props.user.id)}
        >
          Ver Detalle
        </Button>
      </StyledCardActionItem>
    </StyledCardItem>
  );
}

export default CardItem;
