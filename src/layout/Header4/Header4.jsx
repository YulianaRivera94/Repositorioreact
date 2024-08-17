import React, { useState } from 'react';

export const Header4 = () => {
  // Estado para manejar los inputs y la lista de tareas
  const [task, setTask] = useState({
    name: '',
    description: ''
  });
  const [tasks, setTasks] = useState([]);

  // Función para manejar los cambios en los inputs del formulario
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Agregar la nueva tarea al array de tareas
    setTasks([...tasks, task]);

    // Limpiar los inputs
    setTask({
      name: '',
      description: ''
    });
  };

  return (
    <div>
      <h1>Registro de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Nombre de la tarea"
          required
        />
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Descripción de la tarea"
          required
        />
        <button type="submit">Guardar Tarea</button>
      </form>
      <div>
        <h2>Lista de Tareas</h2>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              <strong>{t.name}:</strong> {t.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

