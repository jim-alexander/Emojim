import React, { Component } from 'react'
import emojis from './emoji_list2.json'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Dark, Light } from '../Colors'

import './index.css'

export default class EmojiList extends Component {
  build = () => {
    const emojiObject = (emoji, toCopy) => (
      <CopyToClipboard text={toCopy} key={emoji.order}>
        <div
          className='emoji transition'
          onClick={() => this.props.copy(toCopy)}
          style={{
            // background: this.props.lightTheme
            //   ? Light.containers
            //   : Dark.containers,
            color: this.props.lightTheme ? Light.text : Dark.text
          }}>
          <div className='icon'>{emoji.emoji}</div>
        </div>
      </CopyToClipboard>
    )

    return emojis.map((emoji, index) => {
      let check = false
      let subEmoji = false
      let toCopy = this.props.filters.return === 'code' ? emoji.hexcode : emoji.emoji
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
    <div
      className='emoji notice news transition'
      style={{
        background: this.props.lightTheme ? Light.containers : Dark.containers,
        color: this.props.lightTheme ? Light.text : Dark.text
      }}>
      <h2>News</h2>
      <p>
        <span role='img' aria-label='number'>
          🔢
        </span>
        {' Live counter added!'}
      </p>
      <p>
        <span role='img' aria-label='moon'>
          🌘
        </span>
        {' Dark mode added!'}
      </p>
      <p>
        <span role='img' aria-label='tick'>
          🛠
        </span>
        {' Filters added!'}
      </p>
      <p>
        <span role='img' aria-label='hand'>
          ❓
        </span>
        <a
          href='mailto:alexanderj2396@gmail.com'
          target='_blank'
          className='transition'
          style={{
            color: this.props.lightTheme ? Light.text : Dark.text
          }}
          rel='noopener noreferrer'>
          {' Feedback here!'}
        </a>
      </p>
    </div>
  )
  counter = () =>
    this.props.emojisCopied ? (
      <div
        className='emoji notice counter transition'
        style={{
          background: this.props.lightTheme ? Light.containers : Dark.containers,
          color: this.props.lightTheme ? Light.text : Dark.text
        }}>
        <p>
          {this.props.emojisCopied}
          <span style={{ fontWeight: 400 }}>{' Copies'}</span>
        </p>
      </div>
    ) : (
      <div
        className='emoji notice counter transition'
        style={{
          background: this.props.lightTheme ? Light.containers : Dark.containers,
          color: this.props.lightTheme ? Light.text : Dark.text
        }}>
        <p>{`Loading`}</p>
      </div>
    )

  render() {
    return (
      <div>
        <div id='emoji_container'>
          {/* {this.news()} */}
          {this.counter()}
          {this.build()}
          {/* {this.themeButton()} */}
        </div>
      </div>
    )
  }
}
