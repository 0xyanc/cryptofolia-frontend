import { Center } from '@chakra-ui/react';
import React, { useState } from 'react';

function ImageSlicer() {
  const [showImage, setShowImage] = useState(false);
  const [lastSliceY, setLastSliceY] = useState(null);

  function handleClick() {
    setShowImage(true);
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      setLastSliceY(0);
    };
  }

  function handleSlice() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'https://www.w3schools.com/w3images/wedding.jpg';
    img.onload = () => {
      const sliceHeight = img.height / 10;
      let y;
      if (lastSliceY === null) {
        y = sliceHeight;
      } else {
        y = lastSliceY + sliceHeight;
      }
      ctx.drawImage(img, 0, y, img.width, sliceHeight, 0, y, img.width, sliceHeight);
      setLastSliceY(y);
    };
  }

  return (
    <Center>
      <div>
        <canvas id="canvas" width="600" height="400"></canvas>
        <button onClick={handleClick}>Show Image</button>
        {showImage && (
          <div>
            <button onClick={handleSlice}>Add Slice</button>
          </div>
        )}
      </div>
    </Center>
  );
}

export default ImageSlicer;