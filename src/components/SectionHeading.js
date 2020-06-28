import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

export default function SectionHeading({ heading, link, link_text }) {
  return (
    <div className="section_heading">
      <h3>{heading}</h3>
      <button>
        {link_text}
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

SectionHeading.propTypes = {
  heading: PropTypes.string,
  link: PropTypes.string,
  link_text: PropTypes.string
}

SectionHeading.defaultProps = {
  heading: 'Heading Da',
  link: '#',
  link_text: 'More Products'
}
