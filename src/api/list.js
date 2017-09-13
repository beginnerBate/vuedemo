import axios from 'axios'
export function listData () {
  const url = 'api/listData'
  return axios.get(url)
}
export function listData01 () {
  const url = 'api/listData01'
  return axios.get(url)
}
