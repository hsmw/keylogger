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
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
  };

  if (trans && trans._id) upsert._id = trans._id;

  upsertTransaction.call(upsert, (error, { insertedId }) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.transactionEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/transactions/${insertedId || trans._id}`);
    }
  });
};

const validate = () => {
  $(component.transactionEditorForm).validate({
    rules: {
      title: {
        required: true,
      },
      body: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Need a title in here, Seuss.',
      },
      body: {
        required: 'This thneeds a body, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function transactionEditor(options) {
  component = options.component;
  validate();
}
