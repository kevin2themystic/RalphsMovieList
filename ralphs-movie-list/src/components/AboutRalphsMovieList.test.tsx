import React from "react";
import { render } from "@testing-library/react";
import AboutRalphsMovieList from "./aboutRalphsMovieList";

test("renders about Ralph's movie list", () => {
  const { getByText } = render(<AboutRalphsMovieList />);
});