import React from 'react';
import '../Navbar/Navbar.css'
import {Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul>
            <li><Link to="/Header">INICIO</Link></li>
            <li><Link to="/Header1">CALCULADORA</Link></li>
            <li><Link to="/Header2">COLORES</Link></li>
            <li><Link to="/Header3">REGISTRO</Link></li>
            <li><Link to="/Header4">LISTAS DE TAREAS</Link></li>
            </ul>
        </nav>
    );
    }
