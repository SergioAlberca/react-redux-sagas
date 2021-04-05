import React from "react";
import { render } from "@testing-library/react";
import AlertCustom from "./alert.component";

test("render Alert component", () => {
  const { container } = render(<AlertCustom />);
  expect(container.getElementsByClassName("MuiAlert-root").length).toBe(1);
});

test("render error message in alert", () => {
  const { container } = render(<AlertCustom message="error" />);
  expect(container.lastChild).toHaveTextContent("error");
});
