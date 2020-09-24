import React, { useState } from 'react';
import InputBox from './InputBox';
import Api from '../Api';

const AskForReview = (props) => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [gadget, setGadget] = useState('');
  const [description, setDescription] = useState('');

  const addGadget = () => {
    Api.addGadget({ manufacturer, model, gadget, description });
  };

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
      <button type="submit" className="add-btn" onClick={addGadget}>
        Submit
      </button>
    </form>
  );
};

export default AskForReview;
