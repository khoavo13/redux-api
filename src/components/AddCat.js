import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "reactstrap";
import { addNewCat } from "../redux/catSlide";

export default function AddCat() {
  const dispatch = useDispatch();
  const handle_add_cat = (cat) => {
    dispatch(addNewCat(cat));
  };
  const [text, setText] = useState()
  return (
    <div>
      <Input
        type="text"
        placeholder="Enter your name"
        value={text}
        onChange={e=>setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handle_add_cat({ name: text, price: 15, checked: false });
            setText("")
          }
        }}
      />
    </div>
  );
}
