import axios from 'axios'
import { Item } from '../types/item'

interface Option {
  token: string
}

export async function fetchItem(id: string, option?: Option) {
  let config
  const token =
    process.env.VUE_APP_QIITA_TOKEN || (option || ({} as Option)).token
  if (token) {
    config = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  }
  try {
    const { data }: { data: Item } = await axios.get(
      `https://qiita.com/api/v2/items/${id}`,
      config
    )
    return data
  } catch (e) {
    throw new Error()
  }
}
