import React, { useState } from 'react';

const InputBox = (props) => {
  const [value, setValue] = useState('');

  const handleOnchange = ({ target }) => {
    setValue(target.value);
    props.onChange(target.value);
  };

  return (
    <input
      type={props.type}
      className={props.className}
      onChange={handleOnchange}
      value={value}
    />
  );
};

export default InputBox;
