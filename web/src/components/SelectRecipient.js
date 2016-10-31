import React, { Component } from 'react';

class SelectRecipient extends Component {
  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this);
  }

  setValue(e) {

    let target = e.target;
    let name = target.value;
    let email = target.selectedOptions[0].dataset.value;

    this.props.setValue({recipient: {name: name, email: email}});
  }

  render() {
    let options = this.props.options.map((option) => {
      return <option className="item" key={option.value} data-value={option.value}>{option.label}</option>
    });

    return (
      <div>
        <select
          className="ui selection dropdown" name={this.props.name} defaultValue="prompt" onChange={this.setValue}>
          <option value="prompt" disabled>{this.props.prompt}</option>
          {options}
        </select>
      </div>




    );
  }
}

export default SelectRecipient;
