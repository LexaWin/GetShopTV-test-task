import React from 'react';
import PromoInput from '../PromoInput';
import PromoFinal from '../PromoFinal';
import PromoClose from '../PromoClose';
import PromoQrCode from '../PromoQrCode';

export default class Promo extends React.Component {
  state = {
    isValidNumber: true,
    number: '+7(___)___-__-__',
    isAgreement: false,
    isSubmitButtonEnabled: false,
    currentButtonCoordX: 1,
    currentButtonCoordY: 1,
    promo: 'input',
  }

  componentDidMount() {
    const {
      currentButtonCoordX: x,
      currentButtonCoordY: y,
    } = this.state;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.promo === 'input') {
      const x = this.state.currentButtonCoordX;
      const y = this.state.currentButtonCoordY;

      if (prevState.currentButtonCoordX !== x ||
          prevState.currentButtonCoordY !== y) {
            // document.querySelector(`#${promoButtons[y][x].id}`).focus();
      }
      
      if (prevState.isAgreement !== this.state.isAgreement ||
          prevState.number !== this.state.number ||
          prevState.isValidNumber !== this.state.isValidNumber) {
          
        const isSubmitButtonEnabled = this.state.isAgreement &&
            checkNumber(this.state.number) && this.state.isValidNumber;
        
        this.setState({
          isSubmitButtonEnabled,
        });
    
      }

      if (prevState.isSubmitButtonEnabled !== this.state.isSubmitButtonEnabled &&
          this.state.isSubmitButtonEnabled) {

        this.setState({
          currentButtonCoordX: 0,
          currentButtonCoordY: 5,
        });
      }
    } else if (prevState.promo !== this.state.promo) {
      document.querySelector('#nbClose').focus();
      this.setState({
        currentButtonCoordX: 0,
        currentButtonCoordY: 3,
      });
    }
  }

  inputDigit = buttonId => {
    const digit = '';
    const number = this.state.number.replace('_', digit);


    this.setState({
      number,
    });
  };

  deleteDidit = () => {
    const number = this.state.number.replace(/(?<!\+)\d(?=\D*$)/, '_');

    this.setState({
      number,
      currentButtonCoordX: 0,
      currentButtonCoordY: 3,
      isValidNumber: true,
    });
  };

  handleFrameButtonClick = event => {
    if (event.target.id === 'nbClear') {
      this.deleteDidit();
    } else {
      this.inputDigit(event.target.id);
    }
  };

  handleCheck = event => {
    this.setState(prevState => {
      return {
      isAgreement: !prevState.isAgreement,
      currentButtonCoordX: 0,
      currentButtonCoordY: 4,
      }
    });
  }

  handleSubmit = async () => {
    if (await isValidNumber(this.state.number)) {
      this.setState({
        promo: 'final',
      });
    } else {
      this.setState({
        isValidNumber: false,
        isAgreement: false,
        currentButtonCoordX: 0,
        currentButtonCoordY: 3,
        });
    }
  }

  handleKeyDown = (event) => {
    switch(event.code) {
      case 'ArrowUp':
        break;
      case 'ArrowRight':
        break;

      case 'ArrowDown':
        break;

      case 'ArrowLeft':
        break;
      
      case 'Backspace':
        this.deleteDidit();
        break;

      case 'Digit1':
      case 'Digit2':
      case 'Digit3':
      case 'Digit4':
      case 'Digit5':
      case 'Digit6':
      case 'Digit7':
      case 'Digit8':
      case 'Digit9':
      case 'Digit0':
        this.inputDigit(`nb${event.code.slice(-1)}`);
        break;
    }
  }

  render() {
    return (
      <div>
        {this.state.promo === 'input' ?
          <PromoInput
            isValidNumber={this.state.isValidNumber}
            number={this.state.number}
            handleFrameButtonClick={this.handleFrameButtonClick}
            handleFrameButtonKeyDown={this.handleKeyDown}
            handleCheck={this.handleCheck}
            submitEnabled={this.state.isSubmitButtonEnabled}
            handleSubmit={this.handleSubmit}
            isChecked={this.state.isAgreement}
          /> :

          <PromoFinal />
        }

        <PromoClose
          promoControl={this.props.promoControl}
        />

        <PromoQrCode />
      </div>
    );
  }
}

const checkNumber = number => {
  return !/_/.test(number);
};

const isValidNumber = async number => {
  const API_KEY = '621fdaa3140e463da8de45668768806b';

  const nakedNumber = nakeNumber(number);

  const url = `https://phonevalidation.abstractapi.com/v1/?api_key=${API_KEY}&phone=${nakedNumber}`;

  const result = await fetchNumberData(url);

  return result.valid;
};

const nakeNumber = number => {
  return number.replace(/[\+()-]/g, '');
};

const fetchNumberData = async url => {
  const response = await fetch(url);
  const data = await response.json();

  // console.log(data);

  return data;
};

const getFrameButtons = buttons => {
  const result = [];
  let nbClearHasAlreadyBeen = false;

  for (let i = 0; i < buttons.length - 2; i++)
    for (let j = 0; j < buttons[i].length - 1; j++) {
      if (buttons[i][j].id === 'nbClear' && nbClearHasAlreadyBeen) {
        continue;
      } else if (buttons[i][j].id === 'nbClear') {
        nbClearHasAlreadyBeen = true;
      }

      result.push(buttons[i][j]);
    }

  return result;
};
