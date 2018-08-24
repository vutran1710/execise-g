const api = {
  development: 'http://localhost:3333',
  production: '...some path'
}

// If need more, checkout wretch(https://github.com/elbywan/wretch)
// which is a very complete tool for handling async requests
const request = (uri, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  })

  const configs = {
    method,
    body: body && JSON.stringify(body),
    headers
  }

  // Given a returned json always has an unifying "ok" key
  const middleware = resp => resp.json().then(json => json.ok ? json : Promise.reject(json))

  return fetch(`${api[process.env.NODE_ENV]}${uri}`, configs).then(middleware)
}

export { request, api }
