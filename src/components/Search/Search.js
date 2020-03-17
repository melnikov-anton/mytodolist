import React, { Component } from 'react';
import './Search.css';
import { FaUndo } from 'react-icons/fa';


class Search extends Component {

  state = {
    selectStatus: this.props.status[0].value,
    selectSort: this.props.sort[0].value,
    inputSearch: ''
  }

  static defaultProps = {
    status: [
      {value: 'all', label: 'All'},
      {value: 'completed', label: 'Completed'},
      {value: 'active', label: 'Active'}
    ],
    sort: [
      {value: 'desc', label: 'New first'},
      {value: 'asc', label: 'Old first'}
    ]
  }

  onStatusChange = (event) => {
    this.setState({
      selectStatus: event.target.value
    }, () => {this.props.setFilter(this.state.selectStatus)});
  }

  onSortChange = (event) => {
    this.setState({
      selectSort: event.target.value
    }, () => {this.props.setSort(this.state.selectSort)});
  }

  onInputChange = (event) => {
    this.setState({
      inputSearch: event.target.value
    }, () => {this.props.searchData(this.state.inputSearch)});

  }

  onClearClick = () => {
    this.setState({
      inputSearch: ''
    }, () => {this.props.searchData(this.state.inputSearch)});
  }

  render() {
    return (
      <div className="SContainer">
        <span className="SField">
          <input
            type="text"
            className="SInput"
            placeholder="Search..."
            value={this.state.inputSearch}
            onChange={(e) => {this.onInputChange(e)}}
          />
          <span
            className="SFIcon"
            onClick={() => {this.onClearClick()}}
          >
            <FaUndo size={17}/>
          </span>
        </span>
        <span className="SFilter">
          <span className="SFStatus">
          <span className="SText">Status:</span>
            <select
              name="status"
              value={this.state.selectStatus}
              onChange={(e) => {this.onStatusChange(e)}}
            >
              {this.props.status.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >{item.label}</option>
              ))
              }
            </select>
          </span>
          <span className="SFSort">
            <span className="SText">Sort:</span>
            <select
              name="sort"
              value={this.state.selectSort}
              onChange={(e) => {this.onSortChange(e)}}
            >
              {this.props.sort.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >{item.label}</option>
              ))
              }
            </select>
          </span>
        </span>
      </div>
    );
  }

}

export default Search;
