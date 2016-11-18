import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeTransaction } from '../../api/documents/methods.js';

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeTransaction.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Transaction deleted!', 'success');
        browserHistory.push('/transactions');
      }
    });
  }
};

const ViewTransaction = ({ trans }) => (
  <div className="ViewTransaction">
    <div className="page-header clearfix">
      <h4 className="pull-left">{ trans.title }</h4>
      <ButtonToolbar className="pull-right">
        <ButtonGroup bsSize="small">
          <Button href={`/transactions/${trans._id}/edit`}>Edit</Button>
          <Button onClick={ () => handleRemove(trans._id) } className="text-danger">Delete</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
    { trans.body }
  </div>
);

ViewTransaction.propTypes = {
  trans: React.PropTypes.object.isRequired,
};

export default ViewTransaction;
