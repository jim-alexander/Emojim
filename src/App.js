import React, { Component } from 'react'

import Header from './Header/index'
import EmojiList from './EmojiList/index'
import SideBar from './SideBar/index'
import { Dark, Light } from './Colors'

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
    emojisCopied: null,
    lightTheme: true
  }
  componentDidMount() {
    window.location = 'https://emojim.jialx.com'
    db.ref('/emojis_copied').on('value', (snap) => {
      this.setState({
        emojisCopied: snap.val()
      })
    })
    localStorage.getItem('theme') === 'true'
      ? this.setState({ lightTheme: true })
      : this.setState({ lightTheme: false })
  }
  makeChange = (type, value) => {
    this.setState({
      [type]: value
    })
  }
  copy = (lastCopied) => {
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
      db.ref('/emojis_copied').transaction((value) => value + 1)
    }
  }
  copied() {
    let top = window.scrollY
    return (
      <div
        className={this.state.copied ? 'fadeIn' : 'fadeOut'}
        id='copied_container'
        style={{
          top: top
        }}>
        <div
          style={{
            position: 'relative',
            left: '-50%',
            backgroundColor: this.state.lightTheme ? Light.containers : Dark.containers,
            color: this.state.lightTheme ? Light.text : Dark.text
          }}
          id='copied'>
          <h1>Copied</h1>
          <p style={{ color: 'grey', fontWeight: 500 }}>{this.state.lastCopied}</p>
        </div>
      </div>
    )
  }
  changeTheme = () =>
    this.setState({ lightTheme: !this.state.lightTheme }, () => localStorage.setItem('theme', this.state.lightTheme))

  render() {
    return (
      <div className='App transition'>
        <div
          style={{
            backgroundColor: this.state.lightTheme ? Light.background : Dark.background,
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: -1
          }}
        />
        {/* <SideBar lightTheme={this.state.lightTheme} /> */}
        <audio
          ref={(green) => {
            this.green = green
          }}>
          <source src='/click.mp3' type='audio/mpeg' />
        </audio>
        <Header
          makeChange={(type, value) => this.makeChange(type, value)}
          filters={this.state}
          changeTheme={this.changeTheme}
          lightTheme={this.state.lightTheme}
        />
        <EmojiList
          filters={this.state}
          lightTheme={this.state.lightTheme}
          emojisCopied={this.state.emojisCopied}
          skin={this.state.skin}
          category={this.state.category}
          copy={(lastCopied) => this.copy(lastCopied)}
          return={this.state.return}
        />
        {this.copied()}
      </div>
    )
  }
}
