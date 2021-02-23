import React, { Component } from "react";

class CallToActionButton extends Component {
  render() {
    const { type, className, title, disabled, handleClick } = this.props;

    return (
      <div>
        <button
          disabled={disabled}
          type={type}
          title={title}
          className={className}
          onClick={handleClick}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default CallToActionButton;
