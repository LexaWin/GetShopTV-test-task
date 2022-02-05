import React from 'react';
import PromoInput from '../PromoInput';
import PromoFinal from '../PromoFinal';
import PromoClose from '../PromoClose';
import PromoQrCode from '../PromoQrCode';

export default class Promo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '+7(___)___-__-__',
      isAgreement: false,
      isApproveButtonEnable: false,
      isValidNumber: true,
      currentButton: 'num5',
      promo: 'input',
    }

    this.inputDigit = this.inputDigit.bind(this);
    this.deleteDidit = this.deleteDidit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  componentDidMount() {
    if (this.state.promo === 'input') {
      document.querySelector(`#${this.state.currentButton}`).focus();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.promo === 'input') {
      if (prevState.currentButton !== this.state.currentButton) {
        document.querySelector(`#${this.state.currentButton}`).focus();
      }
      
      if (prevState.isAgreement !== this.state.isAgreement ||
          prevState.number !== this.state.number) {

        this.setState({
          isApproveButtonEnable: this.state.isAgreement &&
                                 checkNumber(this.state.number) &&
                                 this.state.isValidNumber,
        });
    
      }

      if (prevState.isApproveButtonEnable !== this.state.isApproveButtonEnable &&
          this.state.isApproveButtonEnable) {

        this.setState({
          currentButton: 'confirm',
        });
      }
    } else if (prevState.promo !== this.state.promo) {
      document.querySelector('#close').focus();
      this.setState({
        currentButton: 'close',
      });
    }
  }

  inputDigit(digit) {
    const number = this.state.number.replace('_', digit);

    this.setState({
      number,
      currentButton: `num${digit}`,
    });
  }

  deleteDidit() {
    const number = this.state.number.replace(/(?<!\+)\d(?=\D*$)/, '_');

    this.setState({
      number,
      currentButton: 'clear',
      isValidNumber: true,
    });
  }

  handleCheckbox() {
    const checked = !this.state.isAgreement;

    this.setState({
      isAgreement: checked,
      currentButton: 'checkbox',
    });
  }

  async handleConfirm() {
    if (await isValidNumber(this.state.number)) {
      this.setState({
        promo: 'final',
      });
    } else {
      this.setState({
        isValidNumber: false,
        currentButton: 'clear',
        isAgreement: false,
      });
    }
  }

  handleKeyDown(event) {
    switch(event.code) {
      case 'ArrowUp':
        switch(this.state.currentButton) {
          case 'num4':
            this.setState({currentButton: 'num1'});
            break;
          case 'num5':
            this.setState({currentButton: 'num2'});
            break;
          case 'num6':
            this.setState({currentButton: 'num3'});
            break;
          case 'num7':
            this.setState({currentButton: 'num4'});
            break;
          case 'num8':
            this.setState({currentButton: 'num5'});
            break;
          case 'num9':
            this.setState({currentButton: 'num6'});
            break;
          case 'clear':
            this.setState({currentButton: 'num7'});
            break;
          case 'num0':
            this.setState({currentButton: 'num9'});
            break;
          case 'checkbox':
            this.setState({currentButton: 'clear'});
            break;
          case 'confirm':
            this.setState({currentButton: 'checkbox'});
            break;
        }
        break;

      case 'ArrowRight':
        switch(this.state.currentButton) {
          case 'num1':
            this.setState({currentButton: 'num2'});
            break;
          case 'num2':
            this.setState({currentButton: 'num3'});
            break;
          case 'num3':
            this.setState({currentButton: 'close'});
            break;
          case 'num4':
            this.setState({currentButton: 'num5'});
            break;
          case 'num5':
            this.setState({currentButton: 'num6'});
            break;
          case 'num6':
            this.setState({currentButton: 'close'});
            break;
          case 'num7':
            this.setState({currentButton: 'num8'});
            break;
          case 'num8':
            this.setState({currentButton: 'num9'});
            break;
          case 'num9':
            this.setState({currentButton: 'close'});
            break;
          case 'clear':
            this.setState({currentButton: 'num0'});
            break;
          case 'num0':
            this.setState({currentButton: 'close'});
            break;
          case 'checkbox':
            this.setState({currentButton: 'close'});
            break;
          case 'confirm':
            this.setState({currentButton: 'close'});
            break;
        }
        break;

      case 'ArrowDown':
        switch(this.state.currentButton) {
          case 'num1':
            this.setState({currentButton: 'num4'});
            break;
          case 'num2':
            this.setState({currentButton: 'num5'});
            break;
          case 'num3':
            this.setState({currentButton: 'num6'});
            break;
          case 'num4':
            this.setState({currentButton: 'num7'});
            break;
          case 'num5':
            this.setState({currentButton: 'num8'});
            break;
          case 'num6':
            this.setState({currentButton: 'num9'});
            break;
          case 'num7':
            this.setState({currentButton: 'clear'});
            break;
          case 'num8':
            this.setState({currentButton: 'clear'});
            break;
          case 'num9':
            this.setState({currentButton: 'num0'});
            break;
          case 'clear':
            this.setState({currentButton: 'checkbox'});
            break;
          case 'num0':
            this.setState({currentButton: 'checkbox'});
            break;
          case 'checkbox':
            if (this.state.isApproveButtonEnable) {
              this.setState({currentButton: 'confirm'});
            }
            break;
        }
        break;

      case 'ArrowLeft':
        switch(this.state.currentButton) {
          case 'num2':
            this.setState({currentButton: 'num1'});
            break;
          case 'num3':
            this.setState({currentButton: 'num2'});
            break;
          case 'num5':
            this.setState({currentButton: 'num4'});
            break;
          case 'num6':
            this.setState({currentButton: 'num5'});
            break;
          case 'num8':
            this.setState({currentButton: 'num7'});
            break;
          case 'num9':
            this.setState({currentButton: 'num8'});
            break;
          case 'num0':
            this.setState({currentButton: 'clear'});
            break;
          case 'close':
            this.setState({currentButton: 'num5'});
            break;
        }
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
        this.inputDigit(event.code.slice(-1));
        break;
    }
  }

  render() {
    return (
      <div onKeyDown={this.handleKeyDown}>
        {this.state.promo === 'input' ?
          <PromoInput
            handleInput={this.inputDigit}
            handleDelete={this.deleteDidit}
            handleCheckbox={this.handleCheckbox}
            number={this.state.number}
            currentButton={this.state.currentButton}
            confirmDisabled={!this.state.isApproveButtonEnable}
            handleConfirm={this.handleConfirm}
            isValidNumber={this.state.isValidNumber}
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
  const response =
      await fetch(url);
  const data = await response.json();

  // console.log(data);

  return data;
};

