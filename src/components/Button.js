import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const dynamicStyle = props =>
  css`
    color: black;
    width: 100px;
    height: 30px;
    background-color: ${props.primaryBgColor};
    font-size: 14px;
    font-weight: normal;
    box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
    cursor: ${props.disabled ? 'auto' : 'pointer'};
    font-family: normal;
    border-radius: 2px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 0px;
    opacity: ${props.disabled ? 0.3 : 1};
    ${props.customStyle};
    &:hover {
      background-color: ${props.primaryBgColor};
    }
    &:focus {
      border: none;
    }
  `

const ButtonWrapper = styled.button`
  ${dynamicStyle};
`;

class Button extends React.Component {

  handleButtonClick = (value, id) => {
    const { buttonClick } = this.props;
    buttonClick(value, id);
  }

  render() {
    const { title, id, customStyle, primaryBgColor, disabled} = this.props;
    return (
      <ButtonWrapper
        key={id} 
        onClick={()=>this.handleButtonClick(title, id)}
        primaryBgColor={primaryBgColor}
        customStyle={customStyle}
        disabled={disabled}
      >
        {title}
      </ButtonWrapper>
    );
  }
}

Button.defaultProps = {
  customStyle: {},
  primaryBgColor: '#FFFFFF',
  disabled: false,
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  customStyle: PropTypes.shape({}),
  primaryBgColor: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Button;
