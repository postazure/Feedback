import React, { Component } from 'react';

class CommentsForm extends Component {
  textPrompt() {
    let form = this.props.form;
    switch (form.rating) {
      case 5:
        return `How did ${form.recipient.name} make '${form.category.label}' an exceptional experience?`;
      case 4:
        return `How did ${form.recipient.name} make '${form.category.label}' a good experience?`;
      case 3:
        return `What went well with '${form.category.label}', and how can ${form.recipient.name} improve?`;
      default:
        return `How did ${form.recipient.name}'s actions regarding '${form.category.label}' affect you?`;
    }
  }

  render() {
    let prompt = this.textPrompt();

    return (
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <h4 htmlFor="comments">{prompt}</h4>
            <textarea className="comment-area" placeholder="Say something..."/>
          </div>
        </div>

        <button
          className="ui teal button right aligned"
          disabled>
          Send to {this.props.form.recipient.name}
        </button>
      </div>
    )
  }
}

export default CommentsForm;