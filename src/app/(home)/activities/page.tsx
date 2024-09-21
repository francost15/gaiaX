"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Users, Zap, ArrowRight, ArrowLeft, Check, Book, HelpCircle, Briefcase, Lightbulb, AlertCircle, Award, Clock, Home } from "lucide-react"
import Link from 'next/link'

const lessons = [
  {
    id: "l1",
    title: "Comunicación Efectiva",
    icon: <MessageCircle className="w-8 h-8" />,
    content: [
      {
        type: "introduction",
        icon: <Book className="w-6 h-6" />,
        title: "Fundamentos de la Comunicación Efectiva",
        value: "La comunicación efectiva es la base de relaciones laborales exitosas. Implica no solo hablar con claridad, sino también escuchar activamente y comprender el contexto. Una buena comunicación puede mejorar el trabajo en equipo, resolver conflictos y aumentar la productividad general."
      },
      {
        type: "question",
        icon: <HelpCircle className="w-6 h-6" />,
        value: "¿Cuál es un componente clave de la escucha activa?",
        options: [
          "Interrumpir para mostrar entusiasmo",
          "Parafrasear para confirmar entendimiento",
          "Pensar en la respuesta mientras el otro habla",
          "Evitar el contacto visual para concentrarse"
        ],
        correct: 1
      },
      {
        type: "scenario",
        icon: <Briefcase className="w-6 h-6" />,
        value: "En una reunión de equipo, un colega expresa una idea que parece contradecir el enfoque actual del proyecto. ¿Cómo manejarías esta situación para fomentar una comunicación efectiva?",
        options: [
          "Ignorar el comentario para evitar conflictos",
          "Pedir al colega que elabore su idea y buscar entender su perspectiva",
          "Defender inmediatamente el enfoque actual del proyecto",
          "Cambiar de tema para mantener la armonía en la reunión"
        ],
        correct: 1,
        explanation: "Pedir más información demuestra respeto por las ideas de los demás y puede llevar a discusiones productivas que mejoren el proyecto."
      }
    ]
  },
  // Add more lessons here...
]

export default function EnhancedSoftSkillsMicrolearning() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [showNotification, setShowNotification] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showFinalAchievement, setShowFinalAchievement] = useState(false)
  const [incorrectQuestions, setIncorrectQuestions] = useState<number[]>([])
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isActive, timer]);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false)
        handleNext()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  const handleNext = () => {
    if (currentStep < lessons[currentLesson].content.length - 1) {
      setCurrentStep(currentStep + 1)
    } else if (incorrectQuestions.length > 0) {
      setCurrentStep(incorrectQuestions[0])
      setIncorrectQuestions(incorrectQuestions.slice(1))
    } else if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
      setCurrentStep(0)
    } else {
      setShowFinalAchievement(true)
      setIsActive(false)
    }
    setSelectedAnswer(null)
    setIsAnswerCorrect(null)
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1)
      setCurrentStep(lessons[currentLesson - 1].content.length - 1)
    }
    setSelectedAnswer(null)
    setIsAnswerCorrect(null)
  }

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    const currentContent = lessons[currentLesson].content[currentStep] as { correct: number }
    const correct = index === currentContent.correct
    setIsAnswerCorrect(correct)
    if (correct) {
      setCorrectAnswers(correctAnswers + 1)
    } else {
      setShowNotification(true)
      if (!incorrectQuestions.includes(currentStep)) {
        setIncorrectQuestions([...incorrectQuestions, currentStep])
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const renderContent = () => {
    const content = lessons[currentLesson].content[currentStep]
    switch (content.type) {
      case "introduction":
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-teal-700">
              {content.icon}
              <h3 className="font-semibold">{content.title}</h3>
            </div>
            <p className="text-gray-700">{content.value}</p>
          </div>
        )
      case "question":
      case "scenario":
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-teal-700">
              {content.icon}
              <h3 className="font-semibold">{content.type === "question" ? "Pregunta" : "Escenario"}</h3>
            </div>
            <p className="text-gray-700">{content.value}</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {content.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`p-4 rounded-lg transition-colors ${
                    selectedAnswer === index
                      ? isAnswerCorrect
                        ? 'bg-teal-100 border-2 border-teal-500'
                        : 'bg-red-100 border-2 border-red-500'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            {isAnswerCorrect && (
              <div className="mt-4 p-4 bg-teal-50 rounded-lg">
                <div className="flex items-center space-x-2 text-teal-700">
                  <Lightbulb className="w-5 h-5" />
                  <span className="font-semibold">Explicación:</span>
                </div>
                <p className="mt-2 text-teal-800">{content.explanation}</p>
              </div>
            )}
          </div>
        )
    }
  }

  const getAchievement = () => {
    const totalQuestions = lessons.reduce((acc, lesson) => acc + lesson.content.filter(c => c.type !== "introduction").length, 0)
    const percentage = (correctAnswers / totalQuestions) * 100
    if (percentage >= 90) return { level: "Oro", color: "text-yellow-500", bg: "bg-yellow-100" }
    if (percentage >= 75) return { level: "Plata", color: "text-gray-400", bg: "bg-gray-100" }
    return { level: "Bronce", color: "text-orange-500", bg: "bg-orange-100" }
  }

  if (showFinalAchievement) {
    const achievement = getAchievement()
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d7d69] to-[#007d1f] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 max-w-2xl w-full text-center">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">¡Módulo Completado!</h2>
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${achievement.bg} mb-6`}>
            <Award className={`w-16 h-16 ${achievement.color}`} />
          </div>
          <p className="text-xl text-gray-700 mb-4">Has obtenido el logro:</p>
          <p className={`text-4xl font-bold ${achievement.color} mb-6`}>{achievement.level}</p>
          <div className="flex items-center justify-center text-teal-700 mb-6">
            <Clock className="w-6 h-6 mr-2" />
            <span className="text-xl">Tiempo total: {formatTime(timer)}</span>
          </div>
          <div className="mt-6 p-4 bg-teal-50 rounded-lg text-left">
            <h3 className="font-semibold text-teal-700 mb-2">Áreas de mejora:</h3>
            <ul className="list-disc list-inside text-teal-800">
              <li>Practica la escucha activa en tus conversaciones diarias.</li>
              <li>Busca oportunidades para aplicar la resolución de conflictos en situaciones reales.</li>
              <li>Continúa desarrollando tus habilidades de comunicación efectiva.</li>
            </ul>
          </div>
          <Link href="/" className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out">
            <Home className="w-5 h-5 mr-2" />
            Ir al Inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d7d69] to-[#007d1f] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 max-w-2xl w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-teal-800">{lessons[currentLesson].title}</h2>
          <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center">
            {lessons[currentLesson].icon}
          </div>
        </div>
        <div className="mb-8">{renderContent()}</div>
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={currentLesson === 0 && currentStep === 0}
            className="text-teal-600 disabled:text-gray-400"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-teal-800">
            {currentStep + 1} / {lessons[currentLesson].content.length + incorrectQuestions.length}
          </div>
          <button
            onClick={handleNext}
            disabled={currentStep === lessons[currentLesson].content.length - 1 && selectedAnswer === null && incorrectQuestions.length === 0}
            className="text-teal-600 disabled:text-gray-400"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-4 text-center text-teal-700">
          <Clock className="w-5 h-5 inline mr-2" />
          <span>{formatTime(timer)}</span>
        </div>
      </div>
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-yellow-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
          <AlertCircle className="w-6 h-6" />
          <span>Respuesta incorrecta. Se revisará al final de la lección.</span>
        </div>
      )}
    </div>
  )
}