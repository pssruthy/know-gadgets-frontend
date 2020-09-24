import React, { useState } from 'react';
import InputBox from './InputBox';
import Api from '../Api';
import { Redirect } from 'react-router-dom';

const AskForReview = (props) => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [gadget, setGadget] = useState('');
  const [description, setDescription] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const addGadget = (e) => {
    e.preventDefault();
    Api.addGadget({ manufacturer, model, gadget, description }).then(() => {
      setIsAdded(true);
    });
  };

  if (!isAdded)
    return (
      <form onSubmit={addGadget}>
        <div className="label-input">
          <label>Manufacturer</label>
          <InputBox type="text" onChange={setManufacturer} />
        </div>
        <div className="label-input">
          <label>Gadget</label>
          <InputBox type="text" onChange={setGadget}></InputBox>
        </div>
        <div className="label-input">
          <label>Model</label>
          <InputBox type="text" onChange={setModel}></InputBox>
        </div>
        <div className="label-input">
          <label>Description</label>
          <textarea
            type="text"
            onChange={({ target }) => setDescription(target.value)}
          ></textarea>
        </div>
        <button type="submit" className="add-btn">
          Submit
        </button>
      </form>
    );

  return <Redirect to="/latest" />;
};

export default AskForReview;
