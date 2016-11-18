import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';
import Transactions from '../transactions';

Meteor.publish('documents.list', () => Documents.find());

Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});

Meteor.publish('transactions.list', () => Transactions.find());

Meteor.publish('transactions.view', (_id) => {
  check(_id, String);
  return Transactions.find(_id);
});
