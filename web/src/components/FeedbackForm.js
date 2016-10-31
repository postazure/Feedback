import React, { Component } from 'react';
import SelectRecipient from './SelectRecipient';
import RatingInput from './RatingInput';
import ButtonGroupInput from './ButtonGroupInput';
import CommentsForm from './CommentsForm';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teammates: [
        {value: 'mgo@example.com', label: 'M Go'},
        {value: 'fooz@example.com', label: 'Fooz Barz'},
        {value: 'to@example.com', label: 'Toober Booter'},
        {value: 'sammy@example.com', label: 'Sam Slim'}

      ],
      categories: [
        {value: 'keyboardSharing', label: 'Sharing the keyboard'},
        {value: 'leading', label: 'Explaining ideas'},
        {value: 'cleanliness', label: 'Cleanliness'},
        {value: 'singing', label: 'Singing'},
        {value: 'sports', label: 'Sports Commentating'},
        {value: 'pingpong', label: 'Ping Pong'},
        {value: 'artistic', label: 'Artistic'},
        {value: 'spellcasting', label: 'Spell Casting'},
        {value: 'fightclub', label: 'Not talking about fight club'}
      ],
      form: {
        recipient: null,
        rating: null,
        category: null
      }
    };

    this.setFormValue = this.setFormValue.bind(this);

  }

  setFormValue(obj) {
    let newForm = Object.assign({}, this.state.form, obj);

    this.setState({form: newForm}, ()=> {
      console.log(this.state.form)
    });
  }

  render() {
    let prompt;

    if (this.state.form.rating !== null
      && this.state.form.recipient !== null
      && this.state.form.category !== null) {
      prompt = <CommentsForm form={this.state.form}/>;
    }

    return (
      <div className="ui container segment">

        <h4>Who are you pairing with?</h4>
        <SelectRecipient
          id="recipient-input"
          options={this.state.teammates}
          prompt="Please select"
          name="recipient"
          setValue={this.setFormValue}/>

        <h4>How's it going?</h4>
        <RatingInput id="rating-input" setValue={this.setFormValue}/>

        <h4>Pick a category</h4>
        <ButtonGroupInput
          setValue={this.setFormValue}
          categories={this.state.categories}/>

        {prompt}
      </div>
    );
  }
}

export default FeedbackForm;
