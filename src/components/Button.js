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
    cursor: pointer;
    font-family: normal;
    border-radius: 2px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 0px;
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

  handleButtonClick = (id) => {
    const { buttonClick } = this.props;
    buttonClick(id);
  }

  render() {
    const { title, id, customStyle, primaryBgColor} = this.props;
    return (
      <ButtonWrapper
        key={id} 
        onClick={()=>this.handleButtonClick(id)}
        primaryBgColor={primaryBgColor}
        customStyle={customStyle}
      >
        {title}
      </ButtonWrapper>
    );
  }
}

Button.defaultProps = {
  customStyle: {},
  primaryBgColor: '#FFFFFF',
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  customStyle: PropTypes.shape({}),
  primaryBgColor: PropTypes.string,
}

export default Button;
