"use client";
import { useState } from 'react';
import { Flame, Brain, Book, Trophy, Target, Star } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  level: number;
  progress: number;
  total: number;
  points: number;  // Adding points for achievements
}

const achievements: Achievement[] = [
  { id: 1, title: "En llamas", description: "Alcanza una racha de 7 días", icon: <Flame className="h-6 w-6 text-orange-500" />, level: 2, progress: 5, total: 7, points: 100 },
  { id: 2, title: "Filósofo", description: "Gana 1000 EXP", icon: <Brain className="h-6 w-6 text-green-500" />, level: 4, progress: 611, total: 1000, points: 300 },
  { id: 3, title: "Intelectual", description: "Aprende 350 palabras nuevas en un mismo curso", icon: <Book className="h-6 w-6 text-red-500" />, level: 5, progress: 262, total: 350, points: 250 },
  { id: 4, title: "Insuperable", description: "Avanza a la División Plata", icon: <Trophy className="h-6 w-6 text-purple-500" />, level: 2, progress: 1, total: 2, points: 150 },
  { id: 5, title: "En el blanco", description: "Completa 50 lecciones perfectas", icon: <Target className="h-6 w-6 text-green-500" />, level: 1, progress: 25, total: 50, points: 75 },
];

export default function Component() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Lista de logros</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="p-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
            onClick={() => setExpandedId(expandedId === achievement.id ? null : achievement.id)}
          >
            <div className="flex flex-row items-center gap-4 pb-2">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                {achievement.icon}
              </div>
              <div>
                <div className="text-lg font-semibold">{achievement.title}</div>
                <div className="text-sm text-gray-500">Nivel {achievement.level}</div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-2">
              <div className="relative h-2 w-full bg-gray-300 rounded-full">
                <div
                  className="absolute h-full bg-black rounded-full"
                  style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                ></div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                {achievement.progress} / {achievement.total}
              </div>

              {/* Display points in green */}
              <div className="mt-1 text-green-600 font-bold">
                ¡Has ganado {achievement.points} puntos! 🎉
              </div>

              {expandedId === achievement.id && (
                <>
                  <p className="mt-2 text-sm text-gray-700">{achievement.description}</p>
                  
                  {/* Gamification explanation */}
                  <p className="mt-2 text-sm text-green-700 font-bold">
                    ¡Con estos puntos puedes desbloquear nuevas características y obtener recompensas exclusivas!
                  </p>

                  {/* Example of badges */}
                  <div className="mt-3">
                    <h3 className="text-lg font-semibold">Insignias obtenidas:</h3>
                    <div className="flex space-x-2 mt-2">
                      <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-blue-600" />
                      </div>
                      {/* Add more badge icons as desired */}
                    </div>
                  </div>

                  {/* Rewards or levels to unlock */}
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-800">Recompensas a desbloquear:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Nuevo avatar personalizado</li>
                      <li>Acceso a niveles especiales</li>
                      <li>Descuentos en compras dentro de la app</li>
                      {/* Add more rewards as needed */}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
