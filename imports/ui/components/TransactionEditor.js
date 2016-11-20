/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import transactionEditor from '../../modules/transaction-editor.js';

export default class TransactionEditor extends React.Component {
  componentDidMount() {
    transactionEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="key"]').focus(); }, 0);
  }

  render() {
    const { trans } = this.props;
    return (<form
      ref={ form => (this.transactionEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Key</ControlLabel>
        <FormControl
          type="number"
          name="key"
          defaultValue={ trans && trans.key }
          placeholder="1234"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Employee</ControlLabel>
        <FormControl
          type="text"
          name="employee"
          defaultValue={ trans && trans.employee }
          placeholder="12345V"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { trans && trans._id ? 'Save Changes' : 'Add Transaction' }
      </Button>
    </form>);
  }
}

TransactionEditor.propTypes = {
  trans: React.PropTypes.object,
};
