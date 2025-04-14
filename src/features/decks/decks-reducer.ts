import { Deck } from './decks-api.types'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

const fetch_decks = 'DECKS/SET-DECKS' as const
const add_deck = 'DECKS/ADD-DECK' as const

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case fetch_decks: {
      return { ...state, decks: action.decks }
    }
    case add_deck: {
      return { ...state, decks: [action.deck, ...state.decks] }
    }
    default:
      return state
  }
}

type DecksActions = FetchDecksActionType | AddDeckActionType

export type FetchDecksActionType = ReturnType<typeof setDecksAC>
export type AddDeckActionType = ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: Deck[]) => ({
  type: fetch_decks,
  decks,
})
export const addDeckAC = (deck: Deck) => ({
  type: add_deck,
  deck,
})
