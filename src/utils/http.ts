import axios from 'axios'
import { Item } from '../types/item'
import { delay } from './delay'
const { VUE_APP_QIITA_TOKEN } = process.env

interface Option {
  token: string
}

interface ApiResponse {
  data: Item
}

export async function fetchItem(id: string, option?: Option) {
  let config
  const token = VUE_APP_QIITA_TOKEN || (option || ({} as Option)).token
  if (token) {
    config = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  }
  try {
    const [{ data }] = await Promise.all([
      axios.get(`https://qiita.com/api/v2/items/${id}`, config) as Promise<
        ApiResponse
      >,
      delay(250)
    ])
    return data
  } catch (e) {
    throw new Error()
  }
}
