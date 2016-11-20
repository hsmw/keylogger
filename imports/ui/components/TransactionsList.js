import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const TransactionsList = ({ transactions }) => (
  transactions.length > 0 ? <ListGroup className="TransactionsList">
    {transactions.map(({ _id, key }) => (
      <ListGroupItem key={ _id } href={`/transactions/${_id}`}>{ key }</ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No transactions yet.</Alert>
);

TransactionsList.propTypes = {
  transactions: React.PropTypes.array,
};

export default TransactionsList;
