import {
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  TextField,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import styled from 'styled-components'

export const StyledBackButton = styled(IconButton)`
  position: absolute !important;
  top: 0;
  left: 10px;
`

export const StyledInput = styled(TextField)`
  width: 100%;
  margin-bottom: 20px !important;
`

export const StyledLogo = styled.img`
  width: 20%;
  margin-bottom: 20px;
  @media (max-width: 575.98px) {
    width: 30%;
  }
`

export const StyledCardLogin = styled(Card)`
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
`

export const StyledCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const StyledCardDetail = styled(Card)`
  text-align: center;
  border: 2px solid red;
  border: 2px solid red;
  -webkit-box-shadow: 15px 9px 22px 9px rgba(0, 0, 0, 0.75) !important;
  -moz-box-shadow: 15px 9px 22px 9px rgba(0, 0, 0, 0.75) !important;
  box-shadow: 15px 9px 22px 9px rgba(0, 0, 0, 0.75) !important;
`

export const StyledAvatar = styled.img`
  width: 85%;
`

export const StyledAlert = styled(Alert)`
  margin-top: 20px;
`

export const StyledCardItem = styled(Card)`
  margin: 20px;
  text-align: center;
  padding: 10px !important;
  border: 2px solid red;
`

export const StyledCardActionItem = styled(CardActions)`
  justify-content: center;
`

export const StyledSpinner = styled(CircularProgress)`
  padding: 20px;
  width: 90px !important;
  height: 90px !important;
`

export const LogoutButton = styled(IconButton)`
  position: absolute !important;
  right: 10px !important;
  top: 0px;
`
