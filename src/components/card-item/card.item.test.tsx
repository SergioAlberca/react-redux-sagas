import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CardItem from "./card-item.components";
import { IUser } from "../../store/users/types";

const user: IUser = {
  avatar: "https://reqres.in/img/faces/7-image.jpg",
  email: "michael.lawson@reqres.in",
  first_name: "Michael",
  id: 7,
  last_name: "Lawson",
};
const mock = jest.fn();

test("Render CardItem component", () => {
  const { container } = render(<CardItem user={user} goToDetail={mock} />);
  expect(container).toBeInTheDocument();
});

test("Render element of user", () => {
  render(<CardItem user={user} goToDetail={mock} />);
  const email = screen.getByText("michael.lawson@reqres.in");
  const name = screen.getByText("Michael");
  const last_name = screen.getByText("Lawson");

  expect(email).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(last_name).toBeInTheDocument();
});

test("Call the function goToDetail", () => {
  render(<CardItem user={user} goToDetail={mock} />);
  fireEvent.click(screen.getByText(/VER DETALLE/i));
  expect(mock).toHaveBeenCalledTimes(1);
});
