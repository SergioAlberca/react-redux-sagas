import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, TextField } from '@material-ui/core';
import logo from '../../assets/images/logo.png';

const StyledCard = styled(Card)`
  width: 50%;
  height: auto;
  background: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid red;
  -webkit-box-shadow: 15px 9px 22px 9px rgba(0, 0, 0, 0.75) !important;
  -moz-box-shadow: 15px 9px 22px 9px rgba(0, 0, 0, 0.75) !important;
  box-shadow: 15px 9px 22px 9px rgba(0, 0, 0, 0.75) !important;
  @media (max-width: 575.98px) {
    width: 70%;
  }
`;

const StyleContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledImg = styled.img`
  width: 20%;
  margin-bottom: 20px;
  @media (max-width: 575.98px) {
    width: 30%;
  }
`;

const StyledInput = styled(TextField)`
  width: 100%;
  margin-bottom: 20px !important;
`;

function CardLogin(props: any) {
  return (
    <StyledCard>
      <StyleContent>
        <StyledImg src={logo} />
        <StyledInput
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          onChange={(e) => props.handleEmailValue(e.target.value)}
        />
        <StyledInput
          id="outlined-basic-2"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => props.handlePasswordValue(e.target.value)}
        />
      </StyleContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={() => props.login()}>
          Login
        </Button>
      </CardActions>
    </StyledCard>
  );
}

export default CardLogin;
