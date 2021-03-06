import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CatList from '.'

import MockAdapter from '../../../node_modules/axios-mock-adapter'
import { catsMock } from '../../mocks/cats'
import { baseRequest } from '../../api'
import { votesMock } from '../../mocks/votes'

beforeEach(() => {
  const mock = new MockAdapter(baseRequest);

  mock
    .onGet("/images?limit=100")
    .reply(200, catsMock);

  mock
    .onGet("/votes")
    .reply(200, votesMock);
})

test('CatList should render title', async () => {
  render(<CatList />)
  await waitFor(() => screen.findByText('Cats Love Flaps'))
  expect(screen.getByText('Cats Love Flaps')).toBeInTheDocument()
})

test('CatList should display 4 cats on the page', async () => {
  render(<CatList />)
  await waitFor(() => screen.findByAltText('ILJpVUPZq'))
  expect(screen.getByAltText('ILJpVUPZq')).toBeInTheDocument()
})
