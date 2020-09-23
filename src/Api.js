const getGadgets = () => {
  return fetch('/api/getGadgets')
    .then((res) => res.json())
    .then(({ gadgets }) => gadgets);
};

const getGadgetDetails = (id) => {
  return fetch(`/api/getGadgetDetails/${id}`).then((res) => res.json(res));
};

export default { getGadgets, getGadgetDetails };
