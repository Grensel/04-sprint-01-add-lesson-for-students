import { Dispatch } from 'redux'
import { decksApi } from './decks-api'
import { addDeckAC, setDecksAC } from './decks-reducer'
import { AddDeckParams } from './decks-api.types'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => dispatch(setDecksAC(res.data.items)))
}
export const addDecksTC = (payload: AddDeckParams) => (dispatch: Dispatch) => {
  decksApi.addDeck(payload).then((res) => dispatch(addDeckAC(res.data)))
}
