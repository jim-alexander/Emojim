import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="search">
          <h4>Filter by name</h4>
          <div className="option_container">
            <input
              label="search"
              autoComplete="new-password"
              value={this.props.filters.search}
              placeholder="Search for something..."
              id="searchInput"
              className="option_container"
              onChange={e =>
                this.props.makeChange('search', e.target.value.toLowerCase())
              }
            />
          </div>
        </div>
        <div id="action">
          <h4>Click action</h4>
          <div className="select_container">
            <select
              name="cars"
              className="select option_container"
              onChange={e => this.props.makeChange('return', e.target.value)}>
              <option value="copy">Copy Symbol</option>
              <option value="code">Copy Codes</option>
            </select>
          </div>
        </div>
        <div id="gender">
          <h4>Gender</h4>
          <div className="select_container disabled_option">
            <select
              name="cars"
              disabled
              className="select option_container disabled_option">
              <option value="all">All</option>
              <option value="male" disabled>
                Male
              </option>
              <option value="female" disabled>
                Female
              </option>
            </select>
          </div>
        </div>
        <div id="color">
          <h4>Skin Color</h4>
          <div className="select_container disabled_option">
            <select
              disabled
              name="cars"
              className="select option_container disabled_option">
              <option value="all">All</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}
