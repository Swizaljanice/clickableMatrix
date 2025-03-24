import React from 'react';
import MatrixGrid from './MatrixGrid';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <MatrixGrid />
    </div>
  );
}

export default App;
