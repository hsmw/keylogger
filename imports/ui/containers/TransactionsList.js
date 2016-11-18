import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Transactions from '../../api/documents/transactions.js';
import TransactionsList from '../components/TransactionsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('transactions.list');
  if (subscription.ready()) {
    const transactions = Transactions.find().fetch();
    onData(null, { transactions });
  }
};

export default composeWithTracker(composer, Loading)(TransactionsList);
