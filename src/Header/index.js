import React, { Component } from "react";
import { Dark, Light } from "../Colors";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

import "./index.css";

export default class Header extends Component {
  themeButton = () =>
    this.props.lightTheme ? (
      <div
        className="emoji theme transition"
        onClick={() => this.props.changeTheme()}
        style={{
          background: Light.containers,
          color: Light.text
        }}>
        <IoIosMoon />
      </div>
    ) : (
      <div
        className="emoji theme transition"
        onClick={() => this.props.changeTheme()}
        style={{
          background: Dark.containers,
          color: Dark.text
        }}>
        <IoIosSunny />
      </div>
    );
  render() {
    return (
      <div id="header">
        <div id="search">
          <h4
            className="transition"
            style={{
              color: this.props.lightTheme ? Light.subText : Dark.subText
            }}>
            Filter by name
          </h4>
          <div className="option_container">
            <input
              label="search"
              style={{
                background: this.props.lightTheme
                  ? Light.containers
                  : Dark.containers,
                color: this.props.lightTheme ? Light.text : Dark.text
              }}
              autoComplete="new-password"
              value={this.props.filters.search}
              placeholder="Search for something..."
              id="searchInput"
              className={`option_container ${
                this.props.lightTheme ? "placeholderLight" : "placeholderDark"
              } transition`}
              onChange={e =>
                this.props.makeChange("search", e.target.value.toLowerCase())
              }
            />
          </div>
        </div>
        <div id="action">
          <h4
            className="transition"
            style={{
              color: this.props.lightTheme ? Light.subText : Dark.subText
            }}>
            Click action
          </h4>
          <select
            className="select option_container select_container transition"
            style={{
              background: this.props.lightTheme
                ? Light.containers
                : Dark.containers,
              color: this.props.lightTheme ? Light.text : Dark.text
            }}
            onChange={e => this.props.makeChange("return", e.target.value)}>
            <option value="copy">Copy Symbol</option>
            <option value="code">Copy Codes</option>
          </select>
        </div>
        <div id="category">
          <h4
            className="transition"
            style={{
              color: this.props.lightTheme ? Light.subText : Dark.subText
            }}>
            Category
          </h4>
          <select
            className="select option_container transition"
            style={{
              background: this.props.lightTheme
                ? Light.containers
                : Dark.containers,
              color: this.props.lightTheme ? Light.text : Dark.text
            }}
            onChange={e => this.props.makeChange("category", e.target.value)}>
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
          <h4
            className="transition"
            style={{
              color: this.props.lightTheme ? Light.subText : Dark.subText
            }}>
            Skin Color
          </h4>
          <select
            name="cars"
            className="select option_container transition"
            style={{
              background: this.props.lightTheme
                ? Light.containers
                : Dark.containers,
              color: this.props.lightTheme ? Light.text : Dark.text
            }}
            onChange={e => this.props.makeChange("skin", e.target.value)}>
            <option value={-1}>None</option>
            <option value={0}>Light</option>
            <option value={1}>Medium-Light</option>
            <option value={2}>Medium</option>
            <option value={3}>Medium-Dark</option>
            <option value={4}>Dark</option>
          </select>
        </div>
        <div id="theme">
          <h4
            className="transition"
            style={{
              color: this.props.lightTheme ? Light.subText : Dark.subText,
              margin: "10px 0 10px 10px"
            }}>
            Theme
          </h4>
          {this.themeButton()}
        </div>
      </div>
    );
  }
}
