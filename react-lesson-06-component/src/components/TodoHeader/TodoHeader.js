import React from "react";
import PropTypes, { number } from 'prop-types';

export default function TodoHeader(props) {
  console.log(props);
  return (
      <div> {props.desc} {props.children}{props.x + props.y}</div>
  )
}

TodoHeader.propTypes= {
    desc: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
}