import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

  handleButtonClick = (id) => {
    const { buttonClick } = this.props;
    buttonClick(id);
  }

  render() {
    const { title, id, customStyle} = this.props;
    return (
      <button
        key={id} 
        onClick={()=>this.handleButtonClick(id)}
      >
        {title}
      </button>
    );
  }
}

Button.defaultProps = {
  customStyle: {},
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  customStyle: PropTypes.shape({}),
}

export default Button;
