import React, { Component } from 'react'
import emojis from './emoji_list.json'
// import emojis from 'emojibase-data/en/data.json'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './index.css'

export default class EmojiList extends Component {
  //AD OR CONTENT CSS {
  //   grid-column: 10/13;
  //   grid-row: 2/5;
  // }
  build = () =>
    emojis.map((emoji, index) => {
      let search = this.props.filters.search ? this.props.filters.search : null
      let toCopy =
        this.props.filters.return === 'code' ? emoji.codes : emoji.char

      if (search) {
        if (emoji.keywords.includes(search)) {
          return (
            <CopyToClipboard text={toCopy} key={emoji.no}>
              <div
                className="emoji"
                onClick={() => this.props.copy(emoji.char)}>
                <div className="icon">{emoji.char}</div>
              </div>
            </CopyToClipboard>
          )
        }
      } else {
        return (
          <CopyToClipboard text={toCopy} key={emoji.no}>
            <div className="emoji" onClick={() => this.props.copy(emoji.char)}>
              <div className="icon">{emoji.char}</div>
            </div>
          </CopyToClipboard>
        )
      }
      return null
    })
  render() {
    return (
      <div>
        <div id="emoji_container">{this.build()}</div>
      </div>
    )
  }
}
