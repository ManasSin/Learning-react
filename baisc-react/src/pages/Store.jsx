import { Row, Col } from "react-bootstrap";
import { ProductList } from "../ProductsStore";

const Store = () => {
  return (
    <>
      <h1>Welcome to the Store</h1>
      <Row xs={1} md={3} className="g-4">
        {ProductList.map((product, index) => (
          <Col align="center" key={index}>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
