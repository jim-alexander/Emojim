import React, { Component } from 'react'
// import emojis from './emoji_list.json'
import emojis from './emoji_list2.json'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './index.css'

export default class EmojiList extends Component {
  build = () => {
    const emojiObject = (emoji, toCopy) => (
      <CopyToClipboard text={toCopy} key={emoji.order}>
        <div className="emoji" onClick={() => this.props.copy(toCopy)}>
          <div className="icon">{emoji.emoji}</div>
        </div>
      </CopyToClipboard>
    )

    return emojis.map((emoji, index) => {
      let check = false
      let subEmoji = false
      let toCopy =
        this.props.filters.return === 'code' ? emoji.hexcode : emoji.emoji
      let subEmojiToCopy = null

      const searchChecker = () => {
        if (this.props.filters.search) {
          if (JSON.stringify(emoji.tags).includes(this.props.filters.search)) {
            return true
          } else {
            return false
          }
        } else {
          return true
        }
      }
      const skinChecker = () => {
        if (this.props.skin >= 0) {
          if (emoji.skins) {
            if (emoji.skins[this.props.skin]) {
              subEmojiToCopy =
                this.props.filters.return === 'code'
                  ? emoji.skins[this.props.skin].hexcode
                  : emoji.skins[this.props.skin].emoji
              subEmoji = true
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        } else {
          return true
        }
      }
      const categoryChecker = () => {
        let category = JSON.parse(this.props.category)
        if (category >= 0) {
          if (category === emoji.group) {
            return true
          } else {
            return false
          }
        } else {
          return true
        }
      }
      if (!searchChecker() || !skinChecker() || !categoryChecker()) {
        check = false
      } else if (searchChecker() && skinChecker() && categoryChecker()) {
        check = true
      }
      if (check) {
        if (subEmoji) {
          return emojiObject(emoji.skins[this.props.skin], subEmojiToCopy)
        } else {
          return emojiObject(emoji, toCopy)
        }
      } else {
        return null
      }
    })
  }

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
        {' Added filters!'}
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
