/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import transactionEditor from '../../modules/transaction-editor.js';

export default class TransactionEditor extends React.Component {
  componentDidMount() {
    transactionEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { trans } = this.props;
    return (<form
      ref={ form => (this.transactionEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ trans && trans.title }
          placeholder="Oh, The Places You'll Go!"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Body</ControlLabel>
        <FormControl
          componentClass="textarea"
          name="body"
          defaultValue={ trans && trans.body }
          placeholder="Congratulations! Today is your day. You're off to Great Places! You're off and away!"
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
