import React from "react";
import CardActions from "@material-ui/core/CardActions";
import { Button } from "@material-ui/core";
import logo from "../../assets/images/logo.png";
import {
  StyledCardContent,
  StyledCardLogin,
  StyledInput,
  StyledLogo,
} from "../styled-common-components/styled-common-components";

interface IProps {
  handleEmailValue(value: string): void;
  handlePasswordValue(value: string): void;
  login(): void;
}

function CardLogin(props: IProps) {
  return (
    <StyledCardLogin>
      <StyledCardContent>
        <StyledLogo src={logo} />
        <StyledInput
          id="email-input"
          label="Email"
          variant="outlined"
          type="email"
          onChange={(e) => props.handleEmailValue(e.target.value)}
        />
        <StyledInput
          id="password-input"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => props.handlePasswordValue(e.target.value)}
        />
      </StyledCardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.login()}
        >
          Login
        </Button>
      </CardActions>
    </StyledCardLogin>
  );
}

export default CardLogin;
