import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Table } from "reactstrap";
import { removeItem, updateQuantity } from "../redux/cartSlice";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td scope="row">{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, count: -1 }))
                  }
                >
                  -
                </Button>
                {item.quantity}
                <Button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, count: 1 }))
                  }
                >
                  +
                </Button>
              </td>
              <td>${item.price}</td>
              <td>
                <Button
                  className="btn btn-danger"
                  onClick={() => dispatch(removeItem(item))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
