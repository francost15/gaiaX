"use client";
import { useState } from "react";

const preguntas = [
  {
    id: "question1",
    texto: "Cuando aprendes algo nuevo, ¿cómo prefieres recibir la información?",
    opciones: [
      "A) Viendo imágenes, diagramas o gráficos.",
      "B) Escuchando explicaciones o instrucciones.",
      "C) Haciendo algo práctico o físico relacionado con el tema.",
      "D) Leyendo textos o escribiendo notas."
    ],
  },
  {
    id: "question2",
    texto: "Cuando tienes que recordar algo, ¿qué es lo que mejor te funciona?",
    opciones: [
      "A) Recordar imágenes o gráficos.",
      "B) Recordar lo que escuchaste en una conversación o explicación.",
      "C) Recordar lo que hiciste o la acción que realizaste.",
      "D) Recordar las palabras que leíste o escribiste."
    ],
  },
  {
    id: "question3",
    texto: "¿Cómo prefieres recibir instrucciones para realizar una tarea nueva?",
    opciones: [
      "A) Viendo un diagrama o video explicativo.",
      "B) Escuchando una explicación detallada.",
      "C) Aprendiendo mientras lo haces, con práctica.",
      "D) Leyendo un manual o una guía detallada."
    ],
  },
  {
    id: "question4",
    texto: "¿Qué prefieres al estudiar un tema nuevo?",
    opciones: [
      "A) Observar diagramas o gráficos que representen la información.",
      "B) Escuchar una explicación clara o una discusión sobre el tema.",
      "C) Interactuar con objetos o realizar actividades prácticas.",
      "D) Leer textos o escribir notas."
    ],
  },
  {
    id: "question5",
    texto: "¿Cómo prefieres participar en una reunión o discusión grupal?",
    opciones: [
      "A) Usar pizarras, gráficos o presentaciones visuales para expresar ideas.",
      "B) Escuchar a los demás y contribuir verbalmente con tus ideas.",
      "C) Intervenir activamente o hacer demostraciones prácticas.",
      "D) Expresar tus ideas de manera clara y estructurada con palabras."
    ],
  },
  {
    id: "question6",
    texto: "Cuando enfrentas un problema, ¿cómo prefieres resolverlo?",
    opciones: [
      "A) Buscando imágenes o esquemas que te ayuden a visualizar la solución.",
      "B) Discutiendo las posibles soluciones con alguien.",
      "C) Experimentando y probando distintas soluciones.",
      "D) Leyendo o investigando sobre el problema en textos o manuales."
    ],
  },
  {
    id: "question7",
    texto: "¿Qué te motiva más cuando aprendes algo nuevo?",
    opciones: [
      "A) Ver cómo el conocimiento se aplica en gráficos o presentaciones visuales.",
      "B) Escuchar casos prácticos o experiencias contadas por otros.",
      "C) Realizar actividades prácticas donde puedas aplicar lo aprendido.",
      "D) Leer o escribir sobre el tema en profundidad."
    ],
  },
  {
    id: "question8",
    texto: "¿Cómo disfrutas aprender en tu tiempo libre?",
    opciones: [
      "A) Dibujando o creando esquemas que expliquen conceptos.",
      "B) Escuchando podcasts, conferencias o audiolibros.",
      "C) Participando en talleres o actividades prácticas.",
      "D) Leyendo libros o escribiendo sobre lo que te interesa."
    ],
  },
  {
    id: "question9",
    texto: "Cuando trabajas en un equipo, ¿cómo sueles contribuir?",
    opciones: [
      "A) Creando visualizaciones, mapas conceptuales o gráficos.",
      "B) Hablando y explicando tus ideas de manera verbal.",
      "C) Tomando el rol activo, ayudando a ejecutar tareas prácticas.",
      "D) Escribiendo documentos o informes para organizar las ideas."
    ],
  },
  {
    id: "question10",
    texto: "¿Cómo prefieres recibir retroalimentación sobre tu desempeño?",
    opciones: [
      "A) Con gráficos o representaciones visuales de tu progreso.",
      "B) En una conversación personal o verbal.",
      "C) Observando los resultados de lo que hice de forma práctica.",
      "D) A través de un informe escrito con detalles."
    ],
  },
];

export default function Formulario() {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  const handleOptionChange = (question: string, option: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [question]: option,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(selectedOptions); // Manejo del envío de datos
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Cuestionario de Estilos de Aprendizaje</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {preguntas.map((pregunta) => (
            <div key={pregunta.id}>
              <p className="font-semibold mb-2">{pregunta.texto}</p>
              {pregunta.opciones.map((opcion, index) => (
                <div key={index} className="flex items-center mb-1">
                  <input
                    type="radio"
                    name={pregunta.id}
                    value={opcion}
                    onChange={() => handleOptionChange(pregunta.id, opcion)}
                    className="mr-2"
                    required
                  />
                  <label>{opcion}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" type="submit">Enviar</button>
      </form>
    </div>
  );
}