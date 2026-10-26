export interface IGame {
    id: number,
    title: string
}

export interface IStrapiResponse {
    
}

export interface Root {
  data: Daum[]
  meta: Meta
}

export interface Daum {
  id: number
  documentId: string
  title: string
  description: Description[]
  rating: number
  price: number
  genre: string
  releaseDate: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Description {
  type: string
  children: Children[]
}

export interface Children {
  text: string
  type: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
