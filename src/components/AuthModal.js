import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { toggleAuthModel } from 'appRedux/actions'
import React, { Component } from 'react'

export class AuthModal extends Component {
  render() {
    const { showAuthModel, toggleAuthModel } = this.props

    return (
      <Modal show={showAuthModel} onHide={toggleAuthModel}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>ads</Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = ({ app }) => {
  const { showAuthModel } = app
  return { showAuthModel }
}

const mapDispatchToProps = {
  toggleAuthModel: toggleAuthModel
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal)
