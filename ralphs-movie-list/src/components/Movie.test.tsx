import React from "react";
import { render } from "@testing-library/react";
import Movie from "./ralphMovie";

test("renders movie component", () => {
  const { getByText } = render(<Movie MovieModel={
    {
      number: 1,
      name: "test", 
      date: "test", 
      watchDay: "test", 
      watchMonth: "test", 
      watchYear: "test", 
      distributor: "test",
      otherNotes: "test",
      imdbLookupID: "test"
    }
  } />);
});
