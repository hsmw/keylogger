import React from 'react';
import TransactionEditor from '../components/TransactionEditor.js';

const NewTransaction = () => (
  <div className="NewTransaction">
    <h4 className="page-header">New Transaction</h4>
    <TransactionEditor />
  </div>
);

export default NewTransaction;
