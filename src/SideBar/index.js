import React, { Component } from 'react'
import { Dark, Light } from '../Colors'

import './index.css'
export default class SideBar extends Component {
  render() {
    return (
      <div>
        <div
          id="credit"
          style={{
            color: this.props.lightTheme ? Light.subText : Dark.subText
          }}>
          Made by
          <a
            style={{
              marginLeft: 10,
              textDecoration: 'none',
              color: this.props.lightTheme ? Light.text : Dark.text
            }}
            href="https://jimalexander.info/"
            target="_blank"
            rel="noopener noreferrer">
            @Jimalexander
          </a>
        </div>
        {/* {this.emojisCopied()} */}
      </div>
    )
  }
}
