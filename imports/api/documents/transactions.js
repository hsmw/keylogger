import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Transactions = new Mongo.Collection('Transactions');
export default Transactions;

Transactions.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Transactions.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Transactions.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the transaction.',
  },
  body: {
    type: String,
    label: 'The body of the transaction.',
  },
});

Transactions.attachSchema(Transactions.schema);

Factory.define('transaction', Transactions, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
});
