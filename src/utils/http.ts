import { Item } from '../types/item'

interface Option {
  token: string
}

export async function fetchItem(id: string, option?: Option) {
  let config = {}
  const token = (option || ({} as Option)).token
  if (token) {
    config = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  }
  try {
    const res = await fetch(`https://qiita.com/api/v2/items/${id}`, config)
    const data = (await res.json()) as Item
    return data
  } catch (e) {
    throw new Error()
  }
}
