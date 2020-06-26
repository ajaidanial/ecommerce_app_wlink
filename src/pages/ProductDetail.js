import React from 'react'

export default function ProductDetail(props) {
  let { slug } = props.match.params
  return <div>ProductDetail - {slug}</div>
}
