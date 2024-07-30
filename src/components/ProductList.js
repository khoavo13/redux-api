import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { addItem } from "../redux/cartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  useEffect(() => {
    if (status == "start") {
      dispatch(fetchProducts());
    }
  }, []);

  if (status == "loading") return <div>Loading...</div>;
  if (status == "failed") return <div>{error}</div>;

  return (
    <Container>
      <Row>
        {items &&
          items.map((item) => (
            <Col lg={3} md={4} sm={6} xs={6} key={item.id}>
              <Card className="mb-4 me-2">
                <CardBody>
                  <CardImg
                    alt="Card image cap"
                    src={require(`../../public/img/${item.id % 10 + 1}.jpg`)}
                    height="200px"
                    top
                    width="auto"
                  />
                  <CardText>
                    <h1>{item.name}</h1>
                    <p>${item.price} </p>
                    <Link to={`/detail/${item.id}`}>Chi tiết sản phẩm</Link>
                  </CardText>
                  <Button onClick={() => dispatch(addItem(item))}>
                    Add to cart
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
