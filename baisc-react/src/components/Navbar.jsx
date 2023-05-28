import React, { useState } from "react";
import {
  Button,
  Container,
  Navbar,
  Modal,
  ModalHeader,
  ModalBody,
} from "react-bootstrap";

const NavbarComponent = () => {
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
          <Button onClick={handleShow}>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>Shopping Cart</ModalHeader>
        <ModalBody>
          <h1>This is the modal body. </h1>
        </ModalBody>
      </Modal>
    </>
  );
};

export default NavbarComponent;
