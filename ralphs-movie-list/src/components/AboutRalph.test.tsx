import React from "react";
import { render } from "@testing-library/react";
import AboutRalph from "./aboutRalph";

test("renders about Ralph", () => {
  const { getByText } = render(<AboutRalph />);
});
