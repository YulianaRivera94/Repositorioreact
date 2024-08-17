import React, { useState } from 'react';

export const Header = () => {
  const [fullName, setFullName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  const handleChange = (e) => {
    setFullName(e.target.value);
  };

  const handleClick = () => {
    if (fullName.trim()) {
      setShowGreeting(true);
    } else {
      alert('Por favor, ingresa tu nombre completo');
    }
  };

  return (
    <div>
      {!showGreeting && (
        <>
          <input
            type="text"
            placeholder="Ingresa tu nombre completo"
            value={fullName}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Iniciar</button>
        </>
      )}
      {showGreeting && (
        <>
          <h1>Bienvenido {fullName}</h1>
          <h2>¿Cómo podemos ayudarte?</h2>
        </>
      )}
    </div>
  );
};
