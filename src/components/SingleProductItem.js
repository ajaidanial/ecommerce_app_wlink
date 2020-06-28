import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

export default function SingleProductItem({
  badge_type,
  image_link,
  company_name,
  sub_heading,
  price,
  prev_price
}) {
  return (
    <div className="single_product_item">
      <div className="img_container">
        {badge_type === 'new' ? (
          <span className="product_badge badge-success">New Sale</span>
        ) : (
          <span className="product_badge badge-danger">Expires Soon</span>
        )}

        <button className="wishlist_btn">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <img className="product_image" src={image_link} />
      </div>

      <div className="info_container">
        <small>{company_name}</small>
        <small>{sub_heading}</small>
        <p className="price">
          {price} <span>{prev_price}</span>
        </p>
      </div>
    </div>
  )
}

SingleProductItem.propTypes = {
  badge_type: PropTypes.string,
  image_link: PropTypes.string,
  company_name: PropTypes.string,
  sub_heading: PropTypes.string,
  price: PropTypes.string,
  prev_price: PropTypes.string
}

SingleProductItem.defaultProps = {
  badge_type: 'new',
  image_link: require('assets/dummy_640_480.png'),
  company_name: "JBL's",
  sub_heading: 'some large content here',
  price: '$202.32',
  prev_price: '$2011.22'
}
