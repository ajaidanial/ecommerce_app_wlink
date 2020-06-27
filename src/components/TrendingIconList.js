import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export function SingleTrendingItem({ title, price, image_link }) {
  return (
    <div className="single_item">
      <img
        src={image_link ? image_link : require('assets/dummy_250_250.png')}
        alt="trending_item_image"
      />
      <div className="text_content_holder">
        <p>{title}</p>
        <small>{price}</small>
      </div>
    </div>
  )
}

export default class TrendingIconList extends Component {
  render() {
    const { list_title, trendingItemsData } = this.props

    return (
      <div className="trending_icon_list">
        <p>{list_title}</p>
        {trendingItemsData.map((element_data) => (
          <SingleTrendingItem {...element_data} />
        ))}
        <small className="view_more">
          View More <FontAwesomeIcon icon={faChevronRight} />
        </small>
      </div>
    )
  }
}

TrendingIconList.propTypes = {
  list_title: PropTypes.string,
  trendingItemsData: PropTypes.arrayOf(PropTypes.object)
}

TrendingIconList.defaultProps = {
  list_title: 'BestSeller Items',
  trendingItemsData: [
    { title: 'Test1', price: '$201.02', image_link: '' },
    { title: 'Test1', price: '$201.02', image_link: '' },
    { title: 'Test1', price: '$201.02', image_link: '' },
    { title: 'Test1', price: '$201.02', image_link: '' }
  ]
}

SingleTrendingItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  image_link: PropTypes.string
}

SingleTrendingItem.defaultProps = {
  title: 'Test Item Name',
  price: '$201.22',
  image_link: require('assets/dummy_250_250.png')
}
