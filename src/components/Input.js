import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { key } = this.props;
    return (
      <input type="text" key={key} value="My Input Box" />
    );
  }
}

Input.propTypes = {
  key: PropTypes.string.isRequired,
}

export default Input;
