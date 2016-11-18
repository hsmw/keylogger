import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const PublicNavigation = () => (
  <div>
    <Nav>
    <IndexLinkContainer to="/">
      <NavItem eventKey={ 1 } href="/">Index</NavItem>
    </IndexLinkContainer>
    <LinkContainer to="/transactions">
      <NavItem eventKey={ 2 } href="/transactions">Transactions</NavItem>
    </LinkContainer>
    </Nav>
    <Nav pullRight>
    <LinkContainer to="signup">
      <NavItem eventKey={ 1 } href="/signup">Sign Up</NavItem>
    </LinkContainer>
    <LinkContainer to="login">
      <NavItem eventKey={ 2 } href="/login">Log In</NavItem>
    </LinkContainer>
    </Nav>
  </div>
);

export default PublicNavigation;
