import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Transactions from '../../api/documents/transactions.js';
import EditTransaction from '../pages/EditTransaction.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('transactions.view', params._id);

  if (subscription.ready()) {
    const trans = Transactions.findOne();
    onData(null, { trans });
  }
};

export default composeWithTracker(composer, Loading)(EditTransaction);
