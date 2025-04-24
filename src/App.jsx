import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>PROCESO DE ESTAMPADO</h1>
      <div>
        <h2>🟢 1. Diseño gráfico</h2>
        <p>Se comienza creando o adaptando el diseño que se va a imprimir.</p>
        <ul>
          <li>
            Se recomienda usar programas vectoriales como Adobe Illustrator,
            CorelDRAW o Inkscape para mantener la calidad.
          </li>
          <li>
            Si el diseño es a varios colores, se deben separar los colores por
            capas (una por color).
          </li>
        </ul>
      </div>
      <div>
        <h2>🟡 2. Impresión del fotolito</h2>
        <p>
          El diseño se imprime en negro sólido sobre una película transparente
          (llamada fotolito).
        </p>
        <ul>
          <li>
            Este fotolito será utilizado para bloquear la luz durante el proceso
            de revelado.
          </li>
          <li>
            Puede imprimirse con una impresora láser o de inyección de tinta,
            dependiendo del tipo de película.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
