import React from "react";
import { StyledAlert } from "../styled-common-components/styled-common-components";

function AlertCustom(props: any) {
  return <StyledAlert severity="error">{props.message}</StyledAlert>;
}

export default AlertCustom;
