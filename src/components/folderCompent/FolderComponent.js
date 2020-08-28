import React, { Component } from 'react';
import HeaderComponent from '../headerComponent';
import { buildTree, getLastId } from '../helpersComponent';
import ListItem from '../listItem';

class FolderComponent extends Component {
  state = {
    folderGroup: [],
    tree: [],
    prevDivId: '',
    curLiId: '',
    disabled: true,
    lastIdGroup: '',
  };

  componentDidMount() {
    const folderGroup = this.props.value;
    const tree = buildTree(folderGroup);
    const lastIdGroup = getLastId(folderGroup);
    this.setState({ tree, folderGroup, lastIdGroup });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { isFolderPage, value } = this.props;
    if ((!isFolderPage && prevProps.isFolderPage !== isFolderPage)
      || (prevProps.value.length !== value.length)) {
      const folderGroup = this.props.value;
      const tree = buildTree(folderGroup);
      const lastIdGroup = getLastId(folderGroup);
      this.setState({ tree, folderGroup, lastIdGroup });
    }
  }

  addFolder = () => {
    const { changeStatusPage, onChangeFolderClick } = this.props;
    const { lastIdGroup, folderGroup, curLiId } = this.state;
    changeStatusPage('folder', true);
    const [folder] = folderGroup.filter((curFolder) => String(curFolder.id) === curLiId);
    onChangeFolderClick({ id: lastIdGroup + 1, parentKey: folder.id }, true);
    this.setState({ lastIdGroup: lastIdGroup + 1 });
  };

  renameFolder = () => {
    const { folderGroup, curLiId } = this.state;
    const { changeStatusPage, onChangeFolderClick } = this.props;
    changeStatusPage('folder', true);
    const folder = folderGroup.filter((curFolder) => String(curFolder.id) === curLiId);
    onChangeFolderClick(...folder);
  };

  removeFolder = () => {
    const { curLiId } = this.state;
    const { onRemoveFolderClick } = this.props;
    onRemoveFolderClick(curLiId);
  };

  onClickFolder = (event) => {
    const { prevDivId } = this.state;
    const currentLi = document.getElementById(event.target.closest('li').id);
    if (prevDivId) {
      const prevLi = document.getElementById(prevDivId);
      prevLi.classList.toggle('active');
    }
    this.setState({ prevDivId: event.target.id, curLiId: event.target.closest('li').id, disabled: false });
    currentLi.classList.toggle('expandClose');
    currentLi.classList.toggle('expandOpen');
    event.target.classList.toggle('active');
    event.stopPropagation();
  };

  render() {
    const { tree, disabled } = this.state;
    return (
      <div className='folder-block'>
        <HeaderComponent
          add={this.addFolder}
          rename={this.renameFolder}
          remove={this.removeFolder}
          className='btn-folder'
          disabled={disabled}
        />
        <ul className='container root'>
          {tree.map((i) => (
            <ListItem item={i} key={i.id} click={this.onClickFolder} />
          ))}
        </ul>
      </div>
    );
  }
}

export default FolderComponent;
