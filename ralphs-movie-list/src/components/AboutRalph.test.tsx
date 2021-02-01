import React from "react";
import { render } from "@testing-library/react";
import AboutRalph from "./AboutRalph";

test("renders about Ralph", () => {
  const { getByText } = render(<AboutRalph />);
});
