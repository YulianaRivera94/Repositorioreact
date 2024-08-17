import React, { useState } from 'react';

export const Header3= () => {
  // Estado para manejar los campos del formulario y el array de personas
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    correo: '',
    telefono: '',
    id: ''
  });

  const [personas, setPersonas] = useState([]);

  // Función para manejar los cambios en los inputs del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si ya existe una persona con el mismo ID o correo
    const exists = personas.some(
      (persona) => persona.id === formData.id || persona.correo === formData.correo
    );

    if (exists) {
      alert('Una persona con este ID o correo ya existe.');
    } else {
      // Agregar la nueva persona al array
      setPersonas([...personas, formData]);

      // Limpiar el formulario
      setFormData({
        nombre: '',
        usuario: '',
        correo: '',
        telefono: '',
        id: ''
      });
    }
  };

  return (
    <div>
      <h1>Registro de Personas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
          placeholder="Usuario"
          required
        />
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Correo"
          required
        />
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="ID"
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}