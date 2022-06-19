import React, { useContext, useState } from 'react';
import { ContentContext } from '../context';
// import { useState } from 'react';
import { Navbar, Form, FormControl, Button} from 'react-bootstrap';

const NavbarComponent = () => {
  // const [show, setShow] = useState(false);
  const context = useContext(ContentContext)
  const { reqData } = context;
  const [search, setSearch] = useState('');

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    reqData(search);
  }

  return (
    <div className="d-flex bg-white justify-content-center border border-bottom-2 shadow-sm sticky-top">
      <Navbar className="col-sm-11">
        <div className="container mx-0">
          <Navbar.Brand href="#">
            <h3>
              <span className="fw-bold text-primary">Net</span>
              <span className="fw-light text-gray">Slum</span>
            </h3>
          </Navbar.Brand>
          <Form className="formSearch text-align-end col-5 border border-1" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Find"
              className="me-2 border-0 bg-transparent"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type='submit' className="bg-transparent border-0 pb-0 align-items-center">
              <span className="material-icons text-primary">search</span>
            </Button>
          </Form>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;