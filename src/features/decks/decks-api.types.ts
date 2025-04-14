export type FetchDecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type Deck = {
  isFavorite: true
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type Author = {
  id: string
  name: string
}
export type AddDeckParams = {
  name: string
}
