import React, { useState } from 'react';
import web1 from "../src/subha.png";
function RotatingImage() {
  const [rotationDegrees, setRotationDegrees] = useState(0);

  const rotateImage = () => {
    setRotationDegrees(rotationDegrees + 360);
  };

  return (
    <div className="nav-img">
      <img
        src={web1}
        alt="Image"
        style={{ borderRadius: '50%', height: '70px', width: '70px', transform: `rotate(${rotationDegrees}deg)` }}
        onClick={rotateImage}
      />
    </div>
  );
}

export default RotatingImage;
