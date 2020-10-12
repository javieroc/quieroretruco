import fetch from 'node-fetch'
const API_URL = 'http://localhost:8001'

export async function getData (path: string, params: {} = {}, token: string = '') {
  const queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')

  const url = queryString ? `${API_URL}${path}?${queryString}` : `${API_URL}${path}`
  const headers: any = {
    'Content-Type': 'application/json'
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const resp = await fetch(url, { headers })

  const json = await resp.json()
  return json
}

export async function postData (path: string, payload: {}, token: string = '') {
  const url = `${API_URL}${path}`
  const headers: any = {
    'Content-Type': 'application/json'
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const resp = await fetch(url, { method: 'POST', body: JSON.stringify(payload), headers })

  const json = await resp.json()
  return json
}
