import { Item } from '../types/item'
const { VUE_APP_QIITA_TOKEN } = process.env

interface Option {
  token: string
}

export async function fetchItem(id: string, option?: Option) {
  let config = {}
  const token = VUE_APP_QIITA_TOKEN || (option || ({} as Option)).token
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
