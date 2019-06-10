import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {

  handleInputChange = (e) => {
    const { inputValue } = this.props;
    inputValue(e.target.value);
  }
  render() {
    const { id, inputText } = this.props;
    return (
      <input type="text" key={id} value={inputText} onChange={this.handleInputChange} />
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  inputValue: PropTypes.func.isRequired,
}

export default Input;
