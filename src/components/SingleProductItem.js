import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SingleProductItem() {
  return (
    <div className="single_product_item">
      <div className="img_container">
        <span className="product_badge badge-success">Expires Soon</span>
        <button className="wishlist_btn">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <img
          className="product_image"
          src={require('assets/dummy_640_480.png')}
        />
      </div>

      <div className="info_container">
        <small>Company Name</small>
        <small>Get amazing discounts for the grand opening</small>
        <p className="price">
          $201.33 <span>asdsd</span>
        </p>
      </div>
    </div>
  )
}
