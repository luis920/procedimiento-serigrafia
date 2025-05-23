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
      <div>
        <h2>🟠 3. Emulsión y revelado</h2>
        <p>Se prepara el marco con malla para grabar el diseño.</p>
        <ul>
          <li>
            Aplica una capa uniforme de emulsión fotosensible en ambos lados de
            la malla.
          </li>
          <li>Deja secar completamente en un lugar oscuro.</li>
          <li>
            Luego, coloca el fotolito sobre la malla seca y expón a una fuente
            de luz UV.
          </li>
          <li>
            La luz endurece la emulsión, excepto donde está bloqueada por el
            diseño.
            <li>
              Lava la malla con agua para revelar el diseño (la emulsión no
              endurecida se disuelve).
            </li>
          </li>
        </ul>
      </div>
      <div>
        <h2>🔵 4. Preparación de la mesa de impresión</h2>
        <p>Ya con la malla lista (pantalla revelada):</p>
        <ul>
          <li>
            Se alinea en la mesa de impresión o pulpo, dependiendo del equipo
            que uses.
          </li>
          <li>
            Se colocan registros o marcas para asegurar que cada prenda esté
            bien posicionada.
          </li>
          <li>También se ajusta la presión y altura del marco.</li>
        </ul>
      </div>
      <div>
        <h2>🔴 5. Impresión</h2>
        <p>Comienza el proceso de impresión sobre la prenda o superficie.</p>
        <ul>
          <li>
            Coloca la tinta sobre la malla en la parte superior del diseño.
          </li>
          <li>
            Con una rasera o squeegee, presiona y arrastra la tinta sobre el
            diseño.
          </li>
          <li>
            La tinta pasa solo por las zonas reveladas (donde no hay emulsión).
          </li>
          <li>
            Para diseños multicolor, repite el proceso con diferentes mallas.
          </li>
          <div>
            <h2>🟤 6. Secado y curado</h2>
            <p>
              La tinta recién impresa debe fijarse correctamente para durar.
            </p>
            <ul>
              <li>
                Tinta plastisol: requiere curado con calor (usualmente
                160-180°C) mediante una banda de calor o pistola industrial.
              </li>
              <li>
                Tinta base agua: puede secarse al aire o con calor, dependiendo
                del tipo.
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
