import React from "react";

import { cleanup, render, screen, waitFor } from "@testing-library/react";

import Uploader from ".";
import { Simulate } from "react-dom/test-utils";

afterAll(cleanup);

test("Uploader displays the correct title", () => {
  const { getByText } = render(<Uploader />);
  expect(getByText('Uploader')).toBeInTheDocument();

});

test('can select an image and upload will make a request to upload it', async () => {

  const { getByLabelText, getByText } = render(
    <Uploader />,
  )
  const file = new File(['(⌐□_□)'], 'cats.png', { type: 'image/png' })
  const imageInput = getByLabelText('Image Upload')
  Simulate.change(imageInput, { target: { files: [file] } })

  await waitFor(() => screen.findByAltText('previewImage'))
  expect(screen.getByAltText('previewImage')).toBeInTheDocument()
  expect(getByText('Upload')).toBeInTheDocument()
})
