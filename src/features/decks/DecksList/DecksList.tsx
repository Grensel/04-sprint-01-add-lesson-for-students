import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDecksts } from './useFetchDecks'

export const DecksList = () => {
  const { decks } = useFetchDecksts()
  return <ul className={s.list}>
    {decks.map(deck => <DeckItem key={deck.id} deck={deck} />)}
  </ul>
}
