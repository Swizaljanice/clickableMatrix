import React, { useState } from 'react';

export default function MatrixGrid() {
  const gridSize = 3;
  const totalBoxes = gridSize * gridSize;
  const [clickedOrder, setClickedOrder] = useState([]);
  const [colors, setColors] = useState(Array(totalBoxes).fill('white'));

  const handleClick = (index) => {
    if (index === totalBoxes - 1) {
      let newColors = [...colors];
      clickedOrder.forEach((clickedIndex, i) => {
        setTimeout(() => {
          newColors[clickedIndex] = 'orange';
          setColors([...newColors]);
        }, i * 300);
      });
    } else if (!clickedOrder.includes(index)) {
      let newColors = [...colors];
      newColors[index] = 'green';
      setClickedOrder([...clickedOrder, index]);
      setColors(newColors);
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 100px)`, gap: '10px' }}>
      {Array.from({ length: totalBoxes }, (_, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: colors[index],
            border: '1px solid black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            
          }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
