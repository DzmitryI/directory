import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../../components/backdrop';
import { clearObjectValue, renderInputs, updateInput } from '../helperPages';
import Button from '../../components/Button';

class FolderPage extends Component {
  state = {
    folderInput: {
      id: {
        value: '',
        label: 'id',
        disabled: true,
      },
      parentKey: {
        value: '',
        label: 'parentKey',
        disabled: true,
      },
      name: {
        value: '',
        label: 'Name',
      },
    },
    folder: {
      id: '',
      parentKey: '',
      name: '',
    },
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { id, parentKey, name = '' } = nextProps.curFolder;
    if (id !== prevState.folder.id) {
      const folderInput = updateInput(prevState.folderInput, { id, parentKey, name });
      return {
        folder: {
          ...prevState.folder,
          id,
          parentKey,
          name,
        },
        folderInput,
      };
    }
    return {
      prevState,
    };
  }

  btnSaveClick = () => {
    const { onSaveFolderClick, changeStatusPage } = this.props;
    onSaveFolderClick(this.state.folder);
    changeStatusPage('folder', false);
  };

  btnCloseClick = () => {
    const { changeStatusPage } = this.props;
    const { folderInput } = this.state;
    const folderInputClear = clearObjectValue(folderInput);
    this.setState({ folderInput: folderInputClear });
    changeStatusPage('folder', false);
  };

  onHandleInput = (controlName) => (event) => {
    this.handleInput(event, controlName);
  };

  handleInput = ({ target: { value } }, controlName) => {
    const { folderInput, folder } = this.state;
    folderInput[controlName].value = value;
    folder[controlName] = value;
    this.setState({ folderInput, folder });
  };

  render() {
    const { folderInput } = this.state;
    return (
      <>
        <div className='folder-page'>
          {renderInputs(folderInput, this.onHandleInput)}
          <div className='btn-group'>
            <Button name='Save' onClick={this.btnSaveClick} />
            <Button name='Close' onClick={this.btnCloseClick} />
          </div>
        </div>
        <Backdrop flag='folder' />
      </>
    );
  }
}

FolderPage.propTypes = {
  onSaveFolderClick: PropTypes.func.isRequired,
  changeStatusPage: PropTypes.func.isRequired,
};

export default FolderPage;
