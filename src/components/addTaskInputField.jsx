import React, { Component } from "react";

class AddTaskInputField extends Component {
  render() {
    const {
      id,
      type,
      placeholder,
      className,
      handleInputChange,
      inputValue,
    } = this.props;
    return (
      <div className="mb-3">
        <input
          type={type}
          className={className}
          id={id}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
    );
  }
}

export default AddTaskInputField;
