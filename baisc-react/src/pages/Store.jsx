import { Row, Col } from "react-bootstrap";
import { ProductList } from "../ProductsStore";
import { ProductCard } from "../components";

const Store = () => {
  return (
    <>
      <h1>Welcome to the Store</h1>
      <Row xs={1} md={3} className="g-4">
        {ProductList.map((product, index) => (
          <Col align="center" key={index}>
            <ProductCard key={index} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
