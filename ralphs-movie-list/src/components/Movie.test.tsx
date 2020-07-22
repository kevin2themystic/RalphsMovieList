import React from "react";
import { render } from "@testing-library/react";
import Movie from "./Movie";

test("renders movie component", () => {
  const { getByText } = render(<Movie MovieModel={
    {
      number: 1,
      name: "test", 
      date: "test", 
      watchDay: "test", 
      watchMonth: "test", 
      watchYear: "test", 
      imdbUrl: "test", 
      thumbnail: "test", 
      summary: "test", 
      releaseYear: "test",
      id: "test"
    }
  } />);
});
