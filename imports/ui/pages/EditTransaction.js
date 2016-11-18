import React from 'react';
import TransactionEditor from '../components/TransactionEditor.js';

const EditTransaction = ({ trans }) => (
  <div className="EditTransaction">
    <h4 className="page-header">Editing "{ trans.title }"</h4>
    <TransactionEditor trans={ trans } />
  </div>
);

EditTransaction.propTypes = {
  trans: React.PropTypes.object,
};

export default EditTransaction;
