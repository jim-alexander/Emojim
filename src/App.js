import React, { Component } from 'react'

import Header from './Header/index'
import EmojiList from './EmojiList/index'
import SideBar from './SideBar/index'

import { db } from './Firebase'
import './App.css'

export default class App extends Component {
  state = {
    search: '',
    action: '',
    return: 'char',
    platform: '',
    category: -1,
    skin: -1,
    copied: false,
    emojisCopied: null
  }
  componentDidMount() {
    db.ref('/emojis_copied').on('value', snap => {
      this.setState({
        emojisCopied: snap.val()
      })
    })
  }
  makeChange = (type, value) => {
    this.setState({
      [type]: value
    })
  }
  copy = lastCopied => {
    this.green.play()
    this.setState(
      {
        copied: true,
        lastCopied
      },
      () =>
        setTimeout(() => {
          this.setState({ copied: false })
        }, 700)
    )
    if (this.state.emojisCopied) {
      db.ref('/emojis_copied').transaction(value => {
        if (value) {
          value = value + 1
        }
        return value
      })
    }
  }
  copied() {
    let top = window.scrollY
    return (
      <div
        className={this.state.copied ? 'fadeIn' : 'fadeOut'}
        id="copied_container"
        style={{
          top: top
        }}>
        <div style={{ position: 'relative', left: '-50%' }} id="copied">
          <h1>Copied</h1>
          <p style={{ color: 'grey', fontWeight: 500 }}>
            {this.state.lastCopied}
          </p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <audio
          ref={green => {
            this.green = green
          }}>
          <source src="/click.mp3" type="audio/mpeg" />
        </audio>
        <Header
          makeChange={(type, value) => this.makeChange(type, value)}
          filters={this.state}
        />
        <EmojiList
          filters={this.state}
          firebase
          emojisCopied={this.state.emojisCopied}
          skin={this.state.skin}
          category={this.state.category}
          deploy
          copy={lastCopied => this.copy(lastCopied)}
          return={this.state.return}
        />
        {this.copied()}
      </div>
    )
  }
}
