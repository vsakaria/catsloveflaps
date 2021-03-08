import React from 'react'
import { render, waitFor, screen, fireEvent, getAllByAltText, cleanup } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import CatList from '.'

import MockAdapter from '../../../node_modules/axios-mock-adapter'
import { catsMock } from '../../mocks/cats'
import { baseRequest } from '../../api'
import { votesMock } from '../../mocks/votes'

const mock = new MockAdapter(baseRequest);

beforeEach(() => {
  mock
    .onGet("/images?limit=100")
    .reply(200, catsMock);

  mock
    .onGet("/votes")
    .reply(200, votesMock);
})

afterEach(cleanup)

test('CatList should render title', async () => {
  render(<CatList />)
  await waitFor(() => screen.findByText('Cats Love Flaps'))
  expect(screen.getByText('Cats Love Flaps')).toBeInTheDocument()
})

test('CatList should display the correct 4 cats on the page', async () => {
  render(<CatList />)
  await waitFor(() => screen.findByAltText('ILJpVUPZq'))

  /*
    Main test
  */
  const images = ['ILJpVUPZq', 'eDG0BpVD8', 'UBtnqtOZP', '08g1GDsSx']

  images.map((image) => {
    expect(screen.getByAltText(image)).toBeInTheDocument()
  })
})

test('CatList should display a favourite icon when user click on favourie', async () => {
  mock
    .onPost("/favourites", { "image_id": "ILJpVUPZq" })
    .reply(200, { "message": "SUCCESS", "id": 2049343 });

  const { container } = render(<CatList />)

  await waitFor(() => screen.findByText('Cats Love Flaps'))

  /*
    Main test
  */
  const firstFavIcon = (getAllByAltText(container, 'unFavorite')[0])
  fireEvent.click(firstFavIcon)
  await waitFor(() => screen.findByAltText('favorite'))

  expect(screen.getByAltText('favorite')).toBeInTheDocument()
})

test('CatList should reflect voting when user votes', async () => {
  mock
    .onPost("/votes", {
      "image_id": "ILJpVUPZq",
      "value": 1
    })
    .reply(200, { "message": "SUCCESS", "id": 271220 });

  const { container } = render(<CatList />)

  await waitFor(() => screen.findByText('Cats Love Flaps'))

  /*
    Main test
  */
  const firstVoteCount = screen.getAllByText('0')[0]
  expect(firstVoteCount).toBeInTheDocument()

  const firstThumbsUpIcon = (getAllByAltText(container, 'thumbsUp')[0])
  fireEvent.click(firstThumbsUpIcon)

  await waitFor(() => screen.findByText('1'))

  expect(screen.getByText('1')).toBeInTheDocument()
})