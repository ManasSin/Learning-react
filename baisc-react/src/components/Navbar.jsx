import React, { useState, useContext } from "react";
import { CartContext } from "../context/storeContext";
import {
  Button,
  Container,
  Navbar,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
} from "react-bootstrap";
import CartItems from "./CartItems";

const NavbarComponent = () => {
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const [show, setShow] = useState(false);
  const handleShow = () => {
    return setShow(true);
  };
  const handleClose = () => {
    return setShow(false);
  };
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart {productCount} Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>Shopping Cart</ModalHeader>
        <ModalBody>
          <Row xs={1} md={2}>
            <Col align="left">
              {productCount > 0 ? (
                cart.items.map((product, index) => (
                  <CartItems
                    quantity={product.quantity}
                    id={product.id}
                    key={index}
                  />
                ))
              ) : (
                <h1>your cart is empty</h1>
              )}
            </Col>
            <h2>Total : {cart.getTotalCost().toFixed(2)}</h2>
            <Button variant="success">Purchase Items</Button>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default NavbarComponent;
