import React from "react";
const Box = ({
  id,
  handleRemove,
  width = 10,
  height = 10,
  backgroundColor = "green",
}) => {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor,
        }}
      />
      <button onClick={remove}>Remove the box</button>
    </div>
  );
};

export default Box;
