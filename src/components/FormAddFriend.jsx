import React from "react";
import { Button } from "./";

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" placeholder="Enter Name" />

      <label>🌄 Image URL</label>
      <input type="text" placeholder="Enter Image Url" />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
