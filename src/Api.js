const postRequest = (url, body) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

const getGadgets = () => {
  return fetch('/api/getGadgets')
    .then((res) => res.json())
    .then(({ gadgets }) => gadgets);
};

const getGadgetDetails = (id) => {
  return fetch(`/api/getGadgetDetails/${id}`).then((res) => res.json());
};

const getReviews = (id) => {
  return fetch(`/api/getReviews/${id}`)
    .then((res) => res.json())
    .then(({ reviews }) => reviews);
};

const addReview = (details) => {
  return postRequest('/api/addReview', details);
};

const addGadget = (details) => {
  return postRequest('/api/addGadget', details)
    .then((res) => res.json())
    .then(({ id }) => id);
};

const getAuthLink = () =>
  fetch('/api/getAuthLink')
    .then((res) => res.json())
    .then(({ link }) => link);

const getUser = () =>
  fetch('/api/getUser')
    .then((res) => res.json())
    .then(({ details }) => details);

export default {
  getGadgets,
  getGadgetDetails,
  getReviews,
  addReview,
  addGadget,
  getAuthLink,
  getUser,
};
