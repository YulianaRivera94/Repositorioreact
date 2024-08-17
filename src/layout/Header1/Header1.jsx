import React, { useState } from 'react';

export const Header1 = () => {

    // Estado para los números y el resultado
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    // Funciones para manejar los cálculos
    const add = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    };

    const subtract = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
    };

    const multiply = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    };

    const divide = () => {
        if (parseFloat(num2) === 0) {
            setResult('Error: División por 0');
        } else {
            setResult(parseFloat(num1) / parseFloat(num2));
        }
    };

    // Función para reiniciar los números y el resultado
    const reset = () => {
        setNum1('');
        setNum2('');
        setResult('');
    };

    return (
        <div>
            <h1>Calculadora</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Número 1"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Número 2"
            />
            <div>
                <button onClick={add}>Sumar</button>
                <button onClick={subtract}>Restar</button>
                <button onClick={multiply}>Multiplicar</button>
                <button onClick={divide}>Dividir</button>
                <button onClick={reset}>Reiniciar</button>
            </div>
            <h2>Resultado: {result}</h2>
        </div>
    );
};
