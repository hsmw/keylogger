import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import TransactionsList from '../containers/TransactionsList.js';

const Transactions = () => (
  <div className="Transactions">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Transactions</h4>
          <Button
            bsStyle="success"
            className="pull-right"
            href="/transactions/new"
          >New Transaction</Button>
        </div>
        <TransactionsList />
      </Col>
    </Row>
  </div>
);

export default Transactions;
