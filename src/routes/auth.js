import { LOGIN_REDIRECT_URL } from 'constants/appConfig'
import { Redirect, Route } from 'react-router-dom'
import React from 'react'

export const AuthenticatedRoute = ({
  component: Component,
  authData,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authData ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: LOGIN_REDIRECT_URL,
            state: { from: props.location }
          }}
        />
      )
    }
  />
)
