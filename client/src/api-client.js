const BASE_URL = 'http://localhost:3000';

function fetchRequest(path, options) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status < 404 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => err);
}

function getTopics() {
  return fetchRequest('/topics');
}

function addTopic(title) {
  return fetchRequest('/topics/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(title),
  });
}

function voteTopic(id, dir) {
  return fetchRequest(`/topics/${id}/${dir}`, { method: 'PUT' });
}

function deleteTopic(id) {
  return fetchRequest(`/topics/${id}`, { method: 'DELETE' });
}

const api = { getTopics, addTopic, voteTopic, deleteTopic };

module.exports = api;
