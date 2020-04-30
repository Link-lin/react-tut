import React from "react";
import PropTypes from 'prop-types';

export default function TodoHeader(props) {
  return (
      <div> {props.desc} {props.children}{props.x + props.y}</div>
  )
}

TodoHeader.propTypes= {
    desc: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
}