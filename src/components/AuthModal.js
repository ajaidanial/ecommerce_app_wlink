import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

export class AuthModal extends Component {
  render() {
    return (
      <Modal show={true} onHide={alert}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>ads</Modal.Footer>
      </Modal>
    )
  }
}

export default AuthModal
