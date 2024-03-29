import React from 'react';
import Lottie from 'lottie-react';
import turtle from '../../assets/OCOC/OCOC_turtle.json';

function Turtle({ scale }) {
  return <Lottie style={{ width: scale }} animationData={turtle} />;
}

export default Turtle;
