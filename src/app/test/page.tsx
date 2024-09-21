"use client"

import { useState } from "react"
import { Eye, Ear, Hand, Book, ArrowRight, Check } from "lucide-react"

const questions = [
  {
    id: "q1",
    text: "¿Cómo prefieres recibir información nueva?",
    options: [
      { icon: <Eye className="w-8 h-8" />, style: "visual", label: "Ver" },
      { icon: <Ear className="w-8 h-8" />, style: "auditory", label: "Escuchar" },
      { icon: <Hand className="w-8 h-8" />, style: "kinesthetic", label: "Hacer" },
      { icon: <Book className="w-8 h-8" />, style: "reading", label: "Leer" },
    ],
  },
  // Add more questions here...
]

export default function LearningStyleTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const handleAnswer = (style: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: style })
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleSubmit = () => {
    console.log(answers)
    // Here you would typically send the answers to a server or process them
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Descubre tu Estilo de Aprendizaje</h1>
        {currentQuestion < questions.length ? (
          <>
            <p className="text-xl text-center mb-8 text-gray-600">{questions[currentQuestion].text}</p>
            <div className="grid grid-cols-2 gap-6">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.style)}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {option.icon}
                  <span className="mt-2 text-gray-700">{option.label}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <span className="text-gray-500">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                disabled={currentQuestion === questions.length - 1}
                className="flex items-center text-blue-500 disabled:text-gray-400"
              >
                Siguiente <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <Check className="w-16 h-16 mx-auto text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">¡Test Completado!</h2>
            <p className="text-gray-600 mb-8">Gracias por completar el test. Tus respuestas han sido registradas.</p>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              Ver Resultados
            </button>
          </div>
        )}
      </div>
    </div>
  )
}