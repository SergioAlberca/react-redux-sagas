import React from 'react';
import Alert from '@material-ui/lab/Alert';
import styled from 'styled-components';

const StyledAlert = styled(Alert)`
  margin-top: 20px;
`;

function AlertCustom(props: any) {
  return <StyledAlert severity="error">{props.message}</StyledAlert>;
}

export default AlertCustom;
