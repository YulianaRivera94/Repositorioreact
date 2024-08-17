import React, { useState } from 'react';

export const Header2 = () => {
  const [bgColor, setBgColor] = useState('#ffffff'); // Color de fondo inicial

  // Función para generar un color aleatorio en formato hexadecimal
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={generateRandomColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Generar Color Aleatorio
      </button>
    </div>
  );
}


