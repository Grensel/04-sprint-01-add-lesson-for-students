import axios from 'axios'
import { FetchDecksResponse } from './decks-api.types'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>('v2/decks')
  },
}
