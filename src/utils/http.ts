import axios from 'axios'
import { Item } from '../types/item'

export async function fetchItem(id: string) {
  let config
  if (process.env.VUE_APP_QIITA_TOKEN) {
    config = {
      headers: {
        authorization: `Bearer ${process.env.VUE_APP_QIITA_TOKEN}`
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
