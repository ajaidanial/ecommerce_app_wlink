import { connect } from 'react-redux'
import { toggleAuthModel } from 'appRedux/actions'
import React, { Component } from 'react'

import {
  faShoppingCart,
  faUser,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Header extends Component {
  render() {
    const { toggleAuthModel } = this.props

    return (
      <div className="header">
        <div className="container">
          <div className="log_holder">
            <img alt="App Logo" src={require('assets/logo.svg')} />
          </div>

          <div className="search_holder">
            <div className="input_dropdown_holder">
              <FontAwesomeIcon icon={faSearch} />
              <input placeholder="Search for products" />
              <select>
                <option>Product 1</option>
                <option>Product 2</option>
                <option>Product 3</option>
              </select>
            </div>
          </div>

          <div className="auth_holder">
            <div className="user_account_guest" onClick={toggleAuthModel}>
              <FontAwesomeIcon icon={faUser} />
              <p>Sign In</p>
            </div>

            <div className="user_account_authenticated">
              <p>Hello, Ajai</p>
              <p className="text-danger">My Account</p>
              <p className="text-danger">Sign Out</p>
            </div>

            <button className="cart_indicator">
              <span>2</span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  toggleAuthModel: toggleAuthModel
}

export default connect(null, mapDispatchToProps)(Header)
