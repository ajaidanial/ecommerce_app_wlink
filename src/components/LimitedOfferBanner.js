import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

export default function LimitedOfferBanner({
  title,
  helperTitle,
  badge,
  imageLink
}) {
  return (
    <div className="limited_offer_banner">
      <div className="info_area">
        <div className="info_area_content">
          <span class="badge">{badge}</span>
          <h1 className="main_header">{title}</h1>
          <p className="helper_text">{helperTitle}</p>
          <button className="view_button">
            View Offers <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <img alt="" className="image_content" src={imageLink} />
    </div>
  )
}

LimitedOfferBanner.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string,
  helperTitle: PropTypes.string,
  imageLink: PropTypes.string
}

LimitedOfferBanner.defaultProps = {
  badge: 'Limited Offer',
  title: 'All New Content Here, Some Dummy',
  helperTitle: 'at discount, helper content here',
  imageLink: require('assets/dummy_640_480.png')
}
