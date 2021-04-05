import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DetailCard from "./detail-card.component";
import { IUser } from "../../store/users/types";

const user: IUser = {
  avatar: "https://reqres.in/img/faces/7-image.jpg",
  email: "michael.lawson@reqres.in",
  first_name: "Michael",
  id: 7,
  last_name: "Lawson",
};
const mock = jest.fn();

test("Render DetailCard component", () => {
  const { container } = render(
    <DetailCard user={user} updateUser={mock} deleteUser={mock} />
  );
  expect(container).toBeInTheDocument();
});

test("enable fields when the button is pressed", () => {
  render(<DetailCard user={user} updateUser={mock} deleteUser={mock} />);

  const enabledButton = screen.findAllByTestId("enabled");
  const inputs = document.getElementsByClassName("MuiInputBase-input");
  fireEvent.click(enabledButton);
  expect(inputs[0].getAttribute("disabled")).toEqual(null);
  fireEvent.click(enabledButton);
  expect(inputs[0]).toHaveAttribute("disabled");
});

test("call function delete", () => {
  render(<DetailCard user={user} updateUser={mock} deleteUser={mock} />);

  const button = document.getElementById("delete");
  fireEvent.click(button);
  expect(mock).toHaveBeenCalled();
});

test("call function update", () => {
  render(<DetailCard user={user} updateUser={mock} deleteUser={mock} />);
  const enabledButton = screen.findAllByTestId("enabled");
  const button = screen.findAllByTestId("update");
  fireEvent.click(enabledButton);
  fireEvent.click(button);
  expect(mock).toHaveBeenCalled();
});
