export async function getUser(urlId) {
  return fetch(`http://localhost:3000/user/` + urlId)
    .then((response) => response.json())
    .then((data) => {
      return data.data
    })
    .catch(function () {
      return
    })
}

export async function getActivity(urlId) {
  return fetch(`http://localhost:3000/user/` + urlId + '/activity')
    .then((response) => response.json())
    .then((data) => {
      return data.data
    })
    .catch(function () {
      return
    })
}

export async function getAverageSessions(urlId) {
  return fetch(`http://localhost:3000/user/` + urlId + '/average-sessions')
    .then((response) => response.json())
    .then((data) => {
      return data.data
    })
    .catch(function () {
      return
    })
}

export async function getPerformance(urlId) {
  return fetch(`http://localhost:3000/user/` + urlId + '/performance')
    .then((response) => response.json())
    .then((data) => {
      return data.data
    })
    .catch(function () {
      return
    })
}

export async function getScore(urlId) {
  return fetch(`http://localhost:3000/user/` + urlId + '/performance')
    .then((response) => response.json())
    .then((data) => {
      return data.data
    })
    .catch(function () {
      return
    })
}
