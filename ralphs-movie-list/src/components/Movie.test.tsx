import React from "react";
import { render } from "@testing-library/react";
import Movie from "./Movie";

test("renders movie component", () => {
  const { getByText } = render(<Movie MovieModel={{name: "test", date: "test", imdbUrl: "test", thumbnail: "test", summary: "test"}} />);
});
