import { ajax } from 'rxjs/ajax'
import { tap } from 'rxjs/operators'

export class HttpClient {
  constructor ({ baseUrl, crossDomain }) {
    this.baseUrl = baseUrl
    this.crossDomain = crossDomain
  }

  buildUrl (relativeUrl) {
    return relativeUrl.startsWith('/')
      ? this.baseUrl + relativeUrl
      : `${this.baseUrl}/${relativeUrl}`
  }

  buildHeaders (headers = {}) {
    const _headers = Object.assign({}, headers, { 'Content-Type': 'application/json'})
    const token = this.getAuthorization()
    if (token) {
      _headers.Authorization = `Bearer ${token}`
    }

    return _headers
  }

  setAuthorization (token) {
    localStorage.setItem('token', token)
  }

  getAuthorization () {
    return localStorage.getItem('token')
  }

  getBody (resp) {
    return resp.response
  }

  get (url, headers) {
    return this.makeRequest({ url, headers, method: 'GET' })
  }

  post(url, body, headers) {
    return this.makeRequest({ url, method: 'POST', headers, body })
  }

  makeRequest ({ url, method, body, headers }) {
    const fullUrl = this.buildUrl(url)
    const _headers = this.buildHeaders(headers)
    const crossDomain = this.crossDomain
    return ajax({ url: fullUrl, method, body, headers: _headers, crossDomain }).pipe(
      tap(
        // success interceptor
        ({ xhr }) => {
          const token = xhr.getResponseHeader('Authorization')
          if (token) { this.setAuthorization(token) }
        },
        // tap into errors and remove token
        // IMPORTANT: This does not handle the error. Its only clean up for token
        // we want to return the error to caller
        ({ status }) => {
          if (status === 401) {
            localStorage.removeItem('token')
          }
        }
      )
    )
  }
}
