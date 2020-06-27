import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <small>&copy; All rights reserved. Developed by WLinkStudio.</small>

      <button>
        <FontAwesomeIcon icon={faCaretUp} />
      </button>
    </footer>
  )
}
