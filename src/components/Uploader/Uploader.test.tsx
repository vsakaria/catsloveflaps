import React from "react";

import { cleanup, render } from "@testing-library/react";

import Uploader from ".";

afterAll(cleanup);

test("Uploader displays the correct title", () => {
  const { getByText } = render(<Uploader />);
  expect(getByText('Uploader')).toBeInTheDocument();

});
