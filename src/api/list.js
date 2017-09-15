import axios from 'axios'
export function listData () {
  const url = 'api/listData'
  return axios.get(url)
}
export function listData01 () {
  const url = 'api/listData01'
  return axios.get(url)
}
export function huaBan () {
  const url = 'https://huaban.com/?page=2'
  return axios.get(url)
}
