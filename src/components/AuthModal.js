import { connect } from 'react-redux'
import { FormGroup } from 'components'
import { Modal } from 'react-bootstrap'
import { toggleAuthModel } from 'appRedux/actions'
import React, { Component } from 'react'

export class AuthModal extends Component {
  state = {
    modelType: 'sign_in',
    values: {
      phone_number: '',
      password: '',
      full_name: '',
      confirm_password: '',
      otp: ''
    },
    errors: {
      phone_number: '',
      password: '',
      full_name: '',
      confirm_password: '',
      otp: ''
    }
  }

  onInputChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        [name]: value
      }
    })
  }

  render() {
    const { showAuthModel, toggleAuthModel } = this.props
    const { modelType, values, errors } = this.state

    return (
      <Modal
        dialogClassName="auth_model_dialog"
        centered
        show={showAuthModel}
        onHide={toggleAuthModel}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(() => {
            switch (modelType) {
              case 'sign_in':
                return (
                  <>
                    <FormGroup
                      inputType="number"
                      label="Phone Number"
                      value={values.phone_number}
                      name="phone_number"
                      onInputChange={this.onInputChange}
                      error={errors.phone_number}
                    />
                    <FormGroup
                      inputType="password"
                      label="Password"
                      value={values.password}
                      name="password"
                      onInputChange={this.onInputChange}
                      error={errors.password}
                    />
                  </>
                )
              case 'sign_up':
                return (
                  <>
                    <FormGroup
                      inputType="text"
                      label="Full Name"
                      value={values.full_name}
                      name="full_name"
                      onInputChange={this.onInputChange}
                      error={errors.full_name}
                    />
                    <FormGroup
                      inputType="number"
                      label="Phone Number"
                      value={values.phone_number}
                      name="phone_number"
                      onInputChange={this.onInputChange}
                      error={errors.phone_number}
                    />
                    <FormGroup
                      inputType="password"
                      label="Password"
                      value={values.password}
                      name="password"
                      onInputChange={this.onInputChange}
                      error={errors.password}
                    />
                    <FormGroup
                      inputType="password"
                      label="Confirm Password"
                      value={values.confirm_password}
                      name="confirm_password"
                      onInputChange={this.onInputChange}
                      error={errors.confirm_password}
                    />
                  </>
                )
              case 'otp':
                return (
                  <>
                    <FormGroup
                      inputType="number"
                      label="Phone Number"
                      value={values.phone_number}
                      name="phone_number"
                      onInputChange={this.onInputChange}
                      error={errors.phone_number}
                    />
                    <FormGroup
                      inputType="text"
                      label="OTP"
                      value={values.otp}
                      name="otp"
                      onInputChange={this.onInputChange}
                      error={errors.otp}
                    />
                  </>
                )
            }
          })()}
        </Modal.Body>
        <Modal.Footer>
          {(() => {
            switch (modelType) {
              case 'sign_in':
                return (
                  <>
                    <button className="action_btn">Sign In</button>
                    <button className="action_btn">Generate OTP</button>
                  </>
                )
              case 'sign_up':
                return (
                  <>
                    <button className="action_btn">Sign Up</button>
                  </>
                )
              case 'otp':
                return (
                  <>
                    <button className="action_btn">Confirm</button>
                  </>
                )
            }
          })()}
        </Modal.Footer>
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
