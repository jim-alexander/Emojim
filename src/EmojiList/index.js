import React, { Component } from 'react'
import emojis from './emoji_list.json'
// import emojis from 'emojibase-data/en/data.json'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './index.css'

export default class EmojiList extends Component {
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
  news = () => (
    <div className="emoji notice news">
      <h2>News</h2>
      <p>
        <span role="img" aria-label="number">
          🔢
        </span>
        {' Live counter added!'}
      </p>
      <p>
        <span role="img" aria-label="speaker">
          🔊
        </span>
        {' Click sound added!'}
      </p>
      <p>
        <span role="img" aria-label="tick">
          🛠
        </span>
        {' Working on filters.'}
      </p>
      <p>
        <span role="img" aria-label="hand">
          ❓
        </span>
        <a
          href="mailto:alexanderj2396@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          {' Feedback & Suggestions'}
        </a>
      </p>
    </div>
  )
  counter = () =>
    this.props.emojisCopied ? (
      <div className="emoji notice counter ">
        <p>
          {this.props.emojisCopied}
          <span style={{ fontWeight: 400 }}>{' Copies'}</span>
        </p>
      </div>
    ) : (
      <div className="emoji notice counter ">
        <p>{`Loading`}</p>
      </div>
    )
  render() {
    return (
      <div>
        <div id="emoji_container">
          {this.news()}
          {this.counter()}
          {this.build()}
        </div>
      </div>
    )
  }
}
