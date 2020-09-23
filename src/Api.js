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

export default { getGadgets, getGadgetDetails, getReviews };
