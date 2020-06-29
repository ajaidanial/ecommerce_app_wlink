import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export function SingleTrendingItem({ title, price, image_link }) {
  return (
    <div className="single_trending_item">
      <img src={image_link} alt="Trending Item Image" />
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
        <p className="list_heading">{list_title}</p>
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
    {
      title: 'Test1',
      price: '$201.02',
      image_link: require('assets/dummy_250_250.png')
    },
    {
      title: 'Test1',
      price: '$201.02',
      image_link: require('assets/dummy_250_250.png')
    },
    {
      title: 'Test1',
      price: '$201.02',
      image_link: require('assets/dummy_250_250.png')
    },
    {
      title: 'Test1',
      price: '$201.02',
      image_link: require('assets/dummy_250_250.png')
    }
  ]
}

SingleTrendingItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image_link: PropTypes.string.isRequired
}
