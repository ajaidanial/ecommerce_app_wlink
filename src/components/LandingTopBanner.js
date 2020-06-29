import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick'

export default function LandingTopBanner({ slickData }) {
  let slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <div className="landing_top_bannner">
      <div className="container">
        <Slider {...slickSettings}>
          {slickData.map((data) => (
            <div className="inner_slick_container">
              <div className="info_container">
                <div className="inner_info">
                  <small>{data.text1}</small>
                  <h4>{data.text2}</h4>
                  <h1>{data.mainText}</h1>
                  <p>{data.helperText}</p>
                  <button className="btn btn-danger">
                    Shop Now
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>
              <img alt="" src={data.imageLink} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

LandingTopBanner.propTypes = {
  slickData: PropTypes.arrayOf(PropTypes.object)
}

LandingTopBanner.defaultProps = {
  slickData: [
    {
      text1: 'Text 1',
      text2: 'Text 2',
      mainText: 'Main Big Text',
      helperText: 'Helper Text goes here...',
      imageLink: require('assets/dummy_250_250.png')
    },
    {
      text1: 'Text 1',
      text2: 'Text 2',
      mainText: 'Main Big Text',
      helperText: 'Helper Text goes here...',
      imageLink: require('assets/dummy_250_250.png')
    },
    {
      text1: 'Text 1',
      text2: 'Text 2',
      mainText: 'Main Big Text',
      helperText: 'Helper Text goes here...',
      imageLink: require('assets/dummy_250_250.png')
    }
  ]
}
