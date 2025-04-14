import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksApi } from '../decks-api'

export const DecksList = () => {
  useEffect(() => {
    decksApi.fetchDecks().then()
  }, [])
  return <ul className={s.list}></ul>
}
