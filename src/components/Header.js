// SPDX-License-Identifier: GPL-3.0+

import React from 'react';
import {Helmet} from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import { getQuery } from '../lib/query.js';

const Header = ({ location, title }) => {
  return <header>
    <Helmet>
      <title>{ title ? `${title} - ` : ''}EOSP</title>
    </Helmet>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">EOSP</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Form inline action="/search">
            <FormControl name="q" type="text" placeholder={getQuery(location) || 'Search'} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <p></p>
  </header>;
};

export default Header;
