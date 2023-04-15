import React, { useState } from 'react';

function ImageSlicer() {
  const [showImage, setShowImage] = useState(false);

  function handleClick() {
    setShowImage(true);
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
  }

  function handleSlice() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = '../images/sunflowermosaic.png';
    img.onload = () => {
      const sliceWidth = img.width / 10;
      const sliceHeight = img.height / 10;
      const x = Math.floor(Math.random() * 10) * sliceWidth;
      const y = Math.floor(Math.random() * 10) * sliceHeight;
      ctx.drawImage(img, x, y, sliceWidth, sliceHeight, x, y, sliceWidth, sliceHeight);
    };
  }

  return (
    <div>
      <canvas id="canvas" width="946" height="966"></canvas>
      <button onClick={handleClick}>Show Image</button>
      {showImage && (
        <div>
          <button onClick={handleSlice}>Add Slice</button>
        </div>
      )}
    </div>
  );
}

export default (ImageSlicer);