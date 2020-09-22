import React from 'react';
import GadgetList from './GadgetList';
import './style.css';

const gadgets = [
  { id: 1, manufacturer: 'JBL', gadget: 'Headphone', model: 'TFNAS' },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

const Home = () => {
  // const [gadgets, setGadgets] = useState([]);
  return <GadgetList gadgets={gadgets} />;
};

export default Home;
