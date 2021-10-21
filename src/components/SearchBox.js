import React, { Component } from "react";
import "./SearchBox.scss";

import searchImg from '../images/search_button.png';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { placeholder, onChange, disabled, value } = this.props;

    return (
      <div className="search-container">
        <input
          id="input"
          type="text/plain"
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
          autoSave="off"
          autoFocus="off"
          value={this.state.value ? this.state.value : value}
          disabled={disabled}
          onChange={
            onChange ? onChange : (e) => this.onChange(e)
          }
          placeholder={placeholder}
        />
        <img id="button" src={searchImg} alt="search" />
      </div>
    );
  }
}

export default SearchBox;
