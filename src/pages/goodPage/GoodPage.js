import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../../components/backdrop';
import { clearObjectValue, renderInputs, updateInput } from '../helperPages';
import Button from '../../components/Button';

class GoodPage extends Component {
  state = {
    goodInput: {
      id: {
        value: '',
        label: 'id',
        disabled: true,
      },
      groupKey: {
        value: '',
        label: 'groupKey',
        disabled: true,
      },
      name: {
        value: '',
        label: 'Name',
      },
    },
    good: {
      id: '',
      groupKey: '',
      name: '',
    },
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { id, groupKey, name = '' } = nextProps.curGood;
    if (id !== prevState.good.id) {
      const goodInput = updateInput(prevState.goodInput, { id, groupKey, name });
      return {
        good: {
          ...prevState.good,
          id,
          groupKey,
          name,
        },
        goodInput,
      };
    }
    return {
      prevState,
    };
  }

  btnSaveClick = () => {
    const { onSaveGoodClick, changeStatusPage } = this.props;
    onSaveGoodClick(this.state.good);
    changeStatusPage('good', false);
  };

  btnCloseClick = () => {
    const { changeStatusPage } = this.props;
    const { goodInput } = this.state;
    const goodInputClear = clearObjectValue(goodInput);
    this.setState({ goodInput: goodInputClear });
    changeStatusPage('good', false);
  };

  onHandleInput = (controlName) => (event) => {
    this.handleInput(event, controlName);
  };

  handleInput = ({ target: { value } }, controlName) => {
    const { goodInput, good } = this.state;
    goodInput[controlName].value = value;
    good[controlName] = value;
    this.setState({ goodInput, good });
  };

  render() {
    const { goodInput } = this.state;
    return (
      <>
        <div className='good-page'>
          {renderInputs(goodInput, this.onHandleInput)}
          <div className='btn-group'>
            <Button name='Save' onClick={this.btnSaveClick} />
            <Button name='Close' onClick={this.btnCloseClick} />
          </div>
        </div>
        <Backdrop flag='good' />
      </>
    );
  }
}

GoodPage.propTypes = {
  onSaveGoodClick: PropTypes.func.isRequired,
  changeStatusPage: PropTypes.func.isRequired,
};

export default GoodPage;
