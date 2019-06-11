# react-reusable-components-library

-  Examples on Git repo : https://github.com/sonal-ojha/examples-React-reusable-components

react-reusable-components-library is simple to use yet customizable component library which can be used to develop a webpage.
  - The library consists of Inputbox, Button and Grouped Buttons components as of now.
  - All the components are extensively customizable by passing various set of props.
  - Library uses the customStyle prop and overrides the default styles to the elements.
  - `customStyle` as a prop which includes styles in a object format.
  Example: 
    customStyle={{
        margin: '20px',
        width: '200px',
        'background-color': '#ccc',
        'padding-top': '5px',
    }}

  - disabled: As a prop can be passed to Button component.
  - primaryBgColor: overrides the default primary background color. This can be used in both Button and ButtonGroup components.
  - buttonList: This prop is an array of objects used by ButtonGroup component. Each object should consist of [key, value and style] properties. key represents the ID, value represents the title to be displayed on the button and style specific to button. 
  - primaryBgColor highlights the selected button from the group.
  - buttonClicked: Callback that is triggered on click of button and accepts 2 parameters (value, key).
  - selectedValue: represents the current selected option from group of buttons.

  - InputBox: This component accepts 'id, inputText(user entered text), customStyle(overrides styles), inputValue(callback triggers on OnChnage event handler).
  - errorMessage: This prop helps in displaying the error messages at validation level. A props which accepts string and displays error message relative to the input field.

### Installation

This requires [React.js and Prop-Types] to run.
```sh
npm i react-reusable-components-library
```

### How to Use

Install and import react-reusable-components-library and pass the props as per the below table

```sh
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactComponentLibrary from 'react-reusable-components-library';

class App extends Component {

    state = {
    text: '',
    selectedValue: 'one',
    buttonList: [
      {
        key: '1',
        value: 'one',
        style: {
          color: 'red',
          'font-weight': 'bold',
        }
      },
      {
        key: '2',
        value: 'Two',
        style: {
          color: 'yellow',
          'font-weight': 'bold',
        }
      },
    ]
  }

  handleButtonGroupClick = (value, key) => {
    this.setState({
      selectedValue: value
    })
  }

  handleChange = (value, key) => {
    this.setState({
      text: value
    })
  }

  render() {
    return (
      <div className="App">
        <ReactComponentLibrary.Button 
          title="Customizable Button"
          id="1"
          buttonClick={this.buttonClicked}
          primaryBgColor='green'
          customStyle={{
            margin: '20px',
            width: '200px',
          }}
          disabled
        />
        <ReactComponentLibrary.ButtonGroup
          buttonList={buttonList}
          selectedValue={selectedValue}
          buttonClicked={this.handleButtonGroupClick}
          primaryBgColor="green"
          customStyle={{
            'font-size': '15px',
          }}
        />
        <ReactComponentLibrary.Input
          id="2"
          inputValue={this.handleErrorInput}
          inputText={text}
          customStyle={{
            margin: '20px',
          }}
          errorMessage='Please Enter Value!!!'
        />
      </div>
    );
  }
}

export default App;

```
### Work In Progress - On other components.
```

## Contribution

You are welcome to raise issues and PRs in the repository
