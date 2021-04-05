import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CardLogin from "./card-login.components";

const mock1 = jest.fn();
const mock2 = jest.fn();

test("Render CardLogin component", () => {
  const { container } = render(
    <CardLogin
      handleEmailValue={mock1}
      handlePasswordValue={mock1}
      login={mock1}
    />
  );
  expect(container).toBeInTheDocument;
});

test("Inputs call function", () => {
  render(
    <CardLogin
      handleEmailValue={mock1}
      handlePasswordValue={mock2}
      login={mock1}
    />
  );
  const emailInput = screen.getAllByLabelText("Email")[0];
  const passwordInput = screen.getAllByLabelText("Password")[0];
  fireEvent.change(emailInput, { target: { value: "email" } });
  fireEvent.change(passwordInput, { target: { value: "email" } });
  expect(mock1).toHaveBeenCalled();
  expect(mock2).toHaveBeenCalled();
});

test("Button call function", () => {
  render(
    <CardLogin
      handleEmailValue={mock1}
      handlePasswordValue={mock2}
      login={mock1}
    />
  );
  const button = document.getElementsByClassName("MuiButtonBase-root")[0];
  fireEvent.click(button);
  expect(mock1).toHaveBeenCalled();
});
