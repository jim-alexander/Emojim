import React, { Component } from 'react'

import './index.css'
export default class SideBar extends Component {
  emojisCopied = () =>
    this.props.emojisCopied ? (
      <div id="emojis_copied">{`${this.props.emojisCopied} emojis copied`}</div>
    ) : null

  render() {
    return (
      <div>
        <div id="credit">
          Made by
          <a
            style={{ marginLeft: 10, textDecoration: 'none' }}
            href="https://jimalexander.info/"
            target="_blank"
            rel="noopener noreferrer">
            @Jimalexander
          </a>
        </div>
        {this.emojisCopied()}
      </div>
    )
  }
}
