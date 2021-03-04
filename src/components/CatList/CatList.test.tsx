import React from "react";

import { cleanup, render } from "@testing-library/react";

import CatList from ".";

afterAll(cleanup);

test("CatList displays the correct title", () => {
  const { getByText } = render(<CatList />);
  expect(getByText('Cats Love Flaps')).toBeInTheDocument();

});
