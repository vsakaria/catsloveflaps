import { catKey } from './keys';
import axios from "axios";
import { post } from './post'
import { get } from './get'
import { erase } from './erase'

export const baseRequest = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "Content-type": "application/json",
    "x-api-key": catKey
  }
});

export const api = { post, get, erase }
