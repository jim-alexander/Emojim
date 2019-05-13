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
          <select
            className="select option_container select_container"
            onChange={e => this.props.makeChange('return', e.target.value)}>
            <option value="copy">Copy Symbol</option>
            <option value="code">Copy Codes</option>
          </select>
        </div>
        <div id="category">
          <h4>Category</h4>
          <select
            className="select option_container"
            onChange={e => this.props.makeChange('category', e.target.value)}>
            <option value={-1}>None</option>
            <option value={0}>Smileys & Emotion</option>
            <option value={1}>People & Body</option>
            <option value={3}>Animals & Nature</option>
            <option value={4}>Food & Drink</option>
            <option value={5}>Travel & Places</option>
            <option value={6}>Activities</option>
            <option value={7}>Objects</option>
            <option value={8}>Symbols</option>
            <option value={9}>Flags</option>
          </select>
        </div>
        <div id="color">
          <h4>Skin Color</h4>
          <select
            name="cars"
            className="select option_container"
            onChange={e => this.props.makeChange('skin', e.target.value)}>
            <option value={-1}>None</option>
            <option value={0}>Light</option>
            <option value={1}>Medium-Light</option>
            <option value={2}>Medium</option>
            <option value={3}>Medium-Dark</option>
            <option value={4}>Dark</option>
          </select>
        </div>
      </div>
    )
  }
}
