import React from "react";
import { render } from "@testing-library/react";
import Spinner from "./spinner";

test("render Spinner component", () => {
  const { container } = render(<Spinner />);
  expect(container).toBeInTheDocument();
});
