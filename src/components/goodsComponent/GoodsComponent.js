import React, { Component } from 'react';
import HeaderComponent from '../headerComponent';
import { getLastId } from '../helpersComponent';

class GoodsComponent extends Component {
  state = {
    goodGroup: [],
    prevTrId: '',
    curTrId: '',
    disabled: true,
    lastIdGood: '',
  };

  componentDidMount() {
    const { goodBaseFull } = this.props;
    const lastIdGood = getLastId(goodBaseFull);
    this.setState({ lastIdGood });
  }

  componentDidUpdate(prevProps) {
    const { isGoodPage, value, value: goodGroup, goodBaseFull, curFolderId } = this.props;
    const { prevTrId } = this.state;
    if ((!isGoodPage && prevProps.isGoodPage !== isGoodPage) || prevProps.value.length !== value.length) {
      const lastIdGood = getLastId(goodBaseFull);
      this.setState({ goodGroup, lastIdGood });
    };
    if (prevProps.curFolderId !== curFolderId && prevTrId) {
      console.log('change group');
      const prevTr = document.getElementById(prevTrId);
      if (prevTr) {
        prevTr.classList.toggle('active-good');
        this.setState({ prevTrId: '' });
      }
    }
  };

  addGood = () => {
    const { changeStatusPage, onChangeGoodClick, curFolderId } = this.props;
    const { lastIdGood, prevTrId } = this.state;
    changeStatusPage('good', true);
    onChangeGoodClick({ id: lastIdGood + 1, groupKey: curFolderId }, true);
    if (prevTrId) {
      const prevTr = document.getElementById(prevTrId);
      if (prevTr) {
        prevTr.classList.toggle('active-good');
      }
    }
    this.setState({ lastIdGood: lastIdGood + 1, prevTrId: '', curTrId: '' });
  };

  renameGood = () => {
    const { goodGroup, curTrId, prevTrId } = this.state;
    const { changeStatusPage, onChangeGoodClick } = this.props;
    changeStatusPage('good', true);
    if (prevTrId) {
      const prevTr = document.getElementById(prevTrId);
      if (prevTr) {
        prevTr.classList.toggle('active-good');
      }
    }
    this.setState({ prevTrId: '', curTrId: '' });
    const good = goodGroup.filter((curGood) => String(curGood.id) === curTrId);
    onChangeGoodClick(...good);
  };

  removeGood = () => {
    const { curFolderId, onRemoveGoodClick } = this.props;
    const { curTrId } = this.state;
    onRemoveGoodClick(curTrId, curFolderId);
  };

  onClickGood = (event) => {
    const { prevTrId } = this.state;
    const currentTr = document.getElementById(event.target.closest('tr').id);
    if (prevTrId) {
      const prevTr = document.getElementById(prevTrId);
      if (prevTr) {
        prevTr.classList.toggle('active-good');
      }
    }
    this.setState({ prevTrId: currentTr.id, curTrId: currentTr.id, disabled: false });
    currentTr.classList.toggle('active-good');
    event.stopPropagation();
  };

  renderTBody = (goods) =>
    goods.map((good, index) => {
      const { id, name } = good;
      return (
        <tr id={id} key={id} onClick={this.onClickGood}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{id}</td>
        </tr>
      );
    });

  render() {
    const { disabled, goodGroup } = this.state;
    return (
      <div className='goods-block'>
        <HeaderComponent
          add={this.addGood}
          rename={this.renameGood}
          remove={this.removeGood}
          className='btn-good'
          disabled={disabled}
        />
        <table border='1' className='table'>
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>{goodGroup.length > 0 && this.renderTBody(goodGroup)}</tbody>
        </table>
      </div>
    );
  }
}

export default GoodsComponent;
