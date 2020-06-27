import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

export default function Footer({ footerText }) {
  return (
    <footer className="footer">
      <small>{footerText}</small>

      <button>
        <FontAwesomeIcon icon={faCaretUp} />
      </button>
    </footer>
  )
}

Footer.propTypes = {
  footerText: PropTypes.string
}

Footer.defaultProps = {
  footerText: '© All rights reserved. Developed by WLinkStudio.'
}
