/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import Transactions from './transactions.js';

describe('Transactions collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Transactions, 'object');
  });
});
