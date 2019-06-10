import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <button key={key}>
        {title}
      </button>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
}

export default Button;
