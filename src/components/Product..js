import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Input,
} from "reactstrap";
import "./product.css"

export default function Product() {
  const { id } = useParams();
  const { items } = useSelector((state) => state.products);
  const productItem = items.find((item) => item.id == id);
  const [count, setCount] = useState(1);
  return (
    <Container>
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={require(`../../public/img/${id % 10 + 1}.jpg`)}
          height="500px"
          width="50%"
        />
        <CardBody>
          <CardTitle tag="h5">{productItem.name}</CardTitle>
          <CardText>${productItem.price}</CardText>
          <CardText>Số lượng:</CardText>
          <div className="amount-item">
            <Button onClick={() => setCount(count - 1)}>-</Button>
            <Input type="number" value={count} width={"50%"} disabled />
            <Button onClick={() => setCount(count + 1)}>+</Button>
          </div>

          <Button className="btn btn-danger">Add to cart</Button>
        </CardBody>
      </Card>
    </Container>
  );
}
