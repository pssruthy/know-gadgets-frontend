const getMessage = () => {
  return fetch('/api/message')
    .then((res) => res.json())
    .then(({ message }) => message);
};

export default { getMessage };
