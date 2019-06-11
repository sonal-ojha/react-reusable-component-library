import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const dynamicStyle = props =>
  css`
    color: rgb(32, 36, 46);
    width: 100px;
    height: 30px;
    background-color: #FFFFFF;
    font-size: 14px;
    box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
    font-family: normal;
    border-radius: 2px;
    border: 1px solid #ccc;
    padding: 0.5px 0px 0px 5px;
    ${props.customStyle};
    &:focus {
      border: none;
    }
  `
const InputWrapper = styled.input`
  ${dynamicStyle};
`;

const ErrorMessage = styled.label`
  color: #9F3A38;
  font-size: 14px;
`;

class Input extends React.Component {

  handleInputChange = (e) => {
    const { inputValue, id } = this.props;
    inputValue(e.target.value, id);
  }
  render() {
    const { id, inputText, customStyle, inputType, errorMessage } = this.props;
    return (
      <span>
        <InputWrapper
          type={inputType}
          key={id}
          value={inputText}
          onChange={this.handleInputChange}
          customStyle={customStyle}
          errorMessage={errorMessage}
        />
        {errorMessage && <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
        }
      </span>
    );
  }
}

Input.defaultProps = {
  customStyle: {},
  inputType: 'text',
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  inputValue: PropTypes.func.isRequired,
  inputType: PropTypes.string.isRequired,
  customStyle: PropTypes.shape({}),
}

export default Input;
