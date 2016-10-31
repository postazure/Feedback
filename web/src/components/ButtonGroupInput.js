import React, { Component } from 'react';

class ButtonGroupInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      categories: this.getUnique(props.categories, 4)
    };

    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({category: category});

    this.props.setValue({category: category});
  }

  getUnique(cats, count) {
    let tmp = Object.assign([], cats);
    let ret = [];

    for (let i = 0; i < count; i++) {
      let index = Math.floor(Math.random() * tmp.length);
      let removed = tmp.splice(index, 1);
      ret.push(removed[0]);
    }
    return ret;
  }

  renderAll() {
    let buttons = this.state.categories.map((cat) => {
      return (
        <button
          className="ui teal basic button"
          key={cat.value}
          onClick={() => this.setCategory(cat)}>
          {cat.label}
        </button>
      )
    });

    return (
      <div>
        {buttons}
      </div>
    )
  }

  render() {
    if (this.state.category === null) {
      return this.renderAll();
    }

    let category = this.state.category;
    return (
      <div>
        <button
          className="ui teal button"
          onClick={() => this.setCategory(null)}>
          {category.label}
        </button>
      </div>
    );
  }
}

export default ButtonGroupInput;