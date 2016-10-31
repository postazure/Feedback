import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RatingInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null
    }
  }

  handleClick(rating) {
    this.setState({rating: rating});
    this.props.setValue({rating: rating});
  }

  render() {
    return (
      <div>
        <StarRatingComponent
          name="rating"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.handleClick.bind(this)}
        />

      </div>
    );
  }
}

export default RatingInput;