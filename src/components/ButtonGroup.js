import React, { PureComponent } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class ButtonGroup extends PureComponent {
    handleButtonClick = (value, id) => {
        const { buttonClicked } = this.props;
        buttonClicked(value, id);
    }
	render() {
        const { buttonList, selectedValue, primaryBgColor } = this.props;
        return (
            <div>
	            { buttonList.map(button => (
	                <Button
                        id={button.key}
                        title={button.value}
	                    buttonClick={this.handleButtonClick}
	                    primaryBgColor={selectedValue === button.value ? primaryBgColor : '#FFFFFF'}
	                    customStyle={button.style}
                    />
	            ))}
            </div>
        );
	}
}

ButtonGroup.propTypes = {
	buttonList: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string,
		readableName: PropTypes.string,
		style: PropTypes.shape({}),
	})).isRequired,
	selectedValue: PropTypes.string.isRequired,
    buttonClicked: PropTypes.func.isRequired,
    primaryBgColor: PropTypes.string.isRequired,
};

export default ButtonGroup;
