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
  key: {
    type: Number,
    label: 'Key identification number',
    unique: true,
    min: 0,
    max: 1000000000,
  },
  employee: {
    type: String,
    label: 'Fermilab employee identification',
    regEx: /^[0-9]+[NCV]$/,
    min: 4,
    max: 128,
  },
});

Transactions.attachSchema(Transactions.schema);

Factory.define('transaction', Transactions, {
  key: () => 1234,
  employee: () => '15660N',
});
