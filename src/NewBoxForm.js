import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ createBox }) => {
  const [formData, setFromData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFromData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFromData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            value={formData.width}
            id="width"
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Add a new box</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
