import { ProductList, getProductData } from "../ProductsStore";
import { useContext } from "react";
import { CartContext } from "../context/storeContext";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const CartItems = ({ quantity, id }) => {
  const cart = useContext(CartContext);
  const productData = getProductData(id);
  console.log(productData);
  return (
    <Card className="my-2">
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
          totalCost : ${(quantity * productData.price).toFixed(2)}
        </Card.Text>
        <Form as={Row} className="my-2">
          <Col sm="12">
            <Button
              sm="6"
              variant="primary"
              onClick={() => cart.removeOneFromCart(id)}
            >
              -
            </Button>
            <Form.Label className="mx-2" sm="6">
              {quantity}
            </Form.Label>
            <Button
              sm="6"
              variant="primary"
              onClick={() => cart.addOneToCart(id)}
            >
              +
            </Button>
          </Col>
        </Form>
        <Button
          variant="danger"
          size="md"
          onClick={() => cart.deleteFromCart(id)}
        >
          Remove Completely
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItems;
