import React, { useState } from 'react';
import InputBox from './InputBox';
import Api from '../Api';
import { Redirect } from 'react-router-dom';

const AskForReview = (props) => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [gadget, setGadget] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  const addGadget = (event) => {
    event.preventDefault();

    const formDetails = new FormData(event.target);
    formDetails.append('manufacturer', manufacturer);
    formDetails.append('model', model);
    formDetails.append('gadget', gadget);
    formDetails.append('description', description);
    formDetails.append('img', img);

    fetch('/api/addGadget', { method: 'POST', body: formDetails }).then(() =>
      setIsAdded(true)
    );
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
        <div className="label-input">
          <input
            type="file"
            onChange={({ target }) => setImg(target.files[0])}
          ></input>
        </div>
        <button type="submit" className="add-btn">
          Submit
        </button>
      </form>
    );

  return <Redirect to="/latest" />;
};

export default AskForReview;
