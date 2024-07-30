import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Input, Table } from "reactstrap";
import { deleteCat, fetchCats, recheckedCat } from "../redux/catSlide";
import "./cats.css"
import AddCat from "./AddCat";

export default function Cats() {
  const dispatch = useDispatch();
  const { cats } = useSelector((state) => state.cats);
  useEffect(() => {
    dispatch(fetchCats());
  }, []);
  const handle_delete_cat = (id)=>{
    dispatch(deleteCat(id))
  }
  const handle_rechecked=(cat)=>{
    
    dispatch(recheckedCat(cat))
  }
  
  return (
    <div>
      <Container>
        <AddCat />

        <Table hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Checked</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cats.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td className={item.checked? "cat-name active":"cat-name"} onClick={()=>handle_rechecked(item)}>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.checked ? "true" : "false"}</td>
                <td>
                  <Button className="btn btn-danger" onClick={()=>handle_delete_cat(item.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
