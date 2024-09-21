import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { Flame, Brain, Book, Trophy, Target } from 'lucide-react'

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  total: number;
}

const achievements: Achievement[] = [
  { id: 1, title: "En llamas", description: "Alcanza una racha de 7 días", icon: <Flame className="h-5 w-5 text-orange-500" />, progress: 5, total: 7 },
  { id: 2, title: "Filósofo", description: "Gana 1000 EXP", icon: <Brain className="h-5 w-5 text-green-500" />, progress: 611, total: 1000 },
  { id: 3, title: "Intelectual", description: "Aprende 350 palabras nuevas en un mismo curso", icon: <Book className="h-5 w-5 text-red-500" />, progress: 262, total: 350 },
  { id: 4, title: "Insuperable", description: "Avanza a la División Plata", icon: <Trophy className="h-5 w-5 text-purple-500" />, progress: 1, total: 2 },
  { id: 5, title: "En el blanco", description: "Completa 50 lecciones perfectas", icon: <Target className="h-5 w-5 text-blue-500" />, progress: 25, total: 50 },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
          <div className="w-24 h-24 rounded-full shadow-lg">
            <Image src="/placeholder-user.png" alt="Franco ST" className="rounded-full" width={200} height={200} />
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold">Franco ST</div>
            <p className="text-gray-500">Software Development</p>
            <p className="text-gray-500">Director de ciberseguridad T-systems</p>
            <p className="text-gray-400 text-sm">francost15@gmail.com</p>
          </div>
          <div className="ml-auto space-x-6">
            <span className="text-sm font-bold text-green-800">1000 puntos</span>
            <button className="rounded-full p-2 hover:bg-green-600 bg-green-700"
              title="editprofile">
              <MdEdit size={20} className="text-white" />
            </button>
          </div>
        </div>
      
        <div className="pt-6">
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Habilidades</h3>
            <p className="text-sm text-gray-500">Accede a características exclusivas y mejora tu experiencia.</p>
            <div className="mt-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <p className="text-sm text-gray-500">HTML, CSS, JavaScript, React, Next.js</p>
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <p className="text-sm text-gray-500">Node.js, Express, MongoDB, SQL</p>
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">DevOps</h4>
                  <p className="text-sm text-gray-500">Docker, Kubernetes, Jenkins, Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6">
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Logros</h3>
            <p className="text-sm text-gray-500 mb-4">Tus logros y progreso en el aprendizaje</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-sm">{achievement.title}</h4>
                    <p className="text-xs text-gray-500">{achievement.description}</p>
                    <div className="mt-2 h-1 bg-gray-200 rounded-full">
                      <div
                        className="h-1 bg-green-500 rounded-full"
                        style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {achievement.progress} / {achievement.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}