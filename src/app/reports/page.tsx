import { Navbar } from '@/components'
import { Printer, Linkedin } from 'lucide-react'

const courses = [
  {
    title: "Asistente web",
    icon: "🖥️",
    exams: 9,
    credits: 9,
    average: 9.56
  },
  {
    title: "Curador de datos",
    icon: "🔍",
    exams: 9,
    credits: 9,
    average: 9
  },
  {
    title: "Desarrollador de contenido digital",
    icon: "📱",
    exams: 7,
    credits: 7,
    average: 8.29
  }
]

export default function CertificationDashboard() {
  return (
    <>
    
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                {course.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-teal-500">{course.title}</h2>
                <div className="text-4xl font-bold text-teal-500">100%</div>
              </div>
            </div>
            <div className="w-full bg-teal-100 h-2 rounded-full mb-4">
              <div className="bg-teal-500 h-2 rounded-full w-full"></div>
            </div>
            <div className="flex text-sm text-gray-600 mb-4">
              <span className="mr-4">Exámenes: {course.exams}</span>
              <span className="mr-4">Acreditados: {course.credits}</span>
              <span>Promedio: {course.average}</span>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors">
                <Printer className="w-4 h-4 mr-2" />
                Imprimir Certificado
              </button>
            
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}