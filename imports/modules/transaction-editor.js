/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertTransaction } from '../api/documents/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { trans } = component.props;
  const confirmation = trans && trans._id ? 'Transaction updated!' : 'Transaction added!';
  const upsert = {
    key: Number(document.querySelector('[name="key"]').value.trim()),
    employee: document.querySelector('[name="employee"]').value.trim(),
  };

  if (trans && trans._id) upsert._id = trans._id;

  upsertTransaction.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.transactionEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/transactions/${response.insertedId || trans._id}`);
    }
  });
};

const validate = () => {
  $(component.transactionEditorForm).validate({
    rules: {
      key: {
        required: true,
      },
      employee: {
        required: true,
      },
    },
    messages: {
      key: {
        required: 'Need a key in here.',
      },
      employee: {
        required: 'Need an employee ID here.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function transactionEditor(options) {
  component = options.component;
  validate();
}
