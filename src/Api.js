const getGadgets = () => {
  return fetch('/api/getGadgets')
    .then((res) => res.json())
    .then(({ gadgets }) => gadgets);
};

export default { getGadgets };
