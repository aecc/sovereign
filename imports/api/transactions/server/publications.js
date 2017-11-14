import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { query } from '/lib/views';
import { Transactions } from '/imports/api/transactions/Transactions';

Meteor.publish('transactions', () => {
  Transactions.find();
});

Meteor.publish('userTransactions', (terms) => {
  check(terms, Object);
  const parameters = query(terms);

  console.log(`[publish] transactions by userId ${Meteor.userId()}`);
  return Transactions.find(parameters.find, parameters.options);
});
