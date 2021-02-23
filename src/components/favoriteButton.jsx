import React, { Component } from "react";

class FavoriteButton extends Component {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

export default FavoriteButton;
