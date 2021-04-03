import React, { useState } from "react";
import { IUser } from "../../store/users/types";
import {
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import SaveIcon from "@material-ui/icons/Save";
import {
  StyledAvatar,
  StyledCardContent,
  StyledCardDetail,
  StyledInput,
} from "../styled-common-components/styled-common-components";

interface IDetailProps {
  user: IUser;
  updateUser(user: IUser): void;
  deleteUser(id: number): void;
}

function DetailCard(props: IDetailProps) {
  const [isAvailabe, setIsAvailabe] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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
        <StyledCardDetail>
          <CardContent>
            <StyledAvatar src={props.user.avatar} />
          </CardContent>
        </StyledCardDetail>
      </div>
      <div className="col-seven">
        <StyledCardDetail>
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
            <IconButton
              aria-label="delete"
              onClick={() => props.deleteUser(props.user.id)}
            >
              <DeleteForeverOutlinedIcon fontSize="large" color="secondary" />
            </IconButton>
            <Tooltip title="Habilita el formulario para editar">
              <IconButton
                aria-label="delete"
                onClick={() => setIsAvailabe(!isAvailabe)}
              >
                <CreateIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <IconButton
              disabled={!isAvailabe}
              onClick={() => props.updateUser(getFormatData())}
            >
              <SaveIcon fontSize="large" color="primary" />
            </IconButton>
          </CardActions>
        </StyledCardDetail>
      </div>
    </div>
  );
}

export default DetailCard;
