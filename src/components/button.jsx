import React from 'react';

const Button = (props) => {
  const clickedHandle = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <>
      <input
        type="button"
        value={props.value}
        onClick={clickedHandle}
      />
    </>
  );
};

export default Button;
