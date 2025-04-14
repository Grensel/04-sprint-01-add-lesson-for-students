import axios from 'axios'
import { AddDeckParams, Deck, FetchDecksResponse } from './decks-api.types'

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
  addDeck(payload: AddDeckParams) {
    return instance.post<Deck>('v1/decks', payload)
  },
}
