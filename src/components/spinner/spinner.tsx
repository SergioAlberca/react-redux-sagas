import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const StyledSpinner = styled(CircularProgress)`
  padding: 20px;
`;

function Spinner() {
  return <StyledSpinner color="secondary" />;
}

export default Spinner;
