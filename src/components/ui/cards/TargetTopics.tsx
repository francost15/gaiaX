"use client"
import { useState } from 'react'
import { IoMdAdd } from "react-icons/io"
import { Users, DollarSign, BarChart2, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const cards = [
  {
    title: "Gestión del Talento",
    description: "Estrategias para atraer y retener el mejor talento.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Compensaciones y Beneficios",
    description: "Programas de remuneración y beneficios competitivos.",
    icon: <DollarSign className="w-6 h-6" />,
    color: "bg-green-500",
  },
  {
    title: "Tamaño de personal",
    description: "Optimización de la estructura organizacional.",
    icon: <BarChart2 className="w-6 h-6" />,
    color: "bg-purple-500",
  },
  {
    title: "Relaciones Laborales",
    description: "Mantenimiento de un ambiente laboral positivo.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-red-500",
  },
]

export default function TargetTopics() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">Hola User</h2>
        <p className="text-lg  mb-8">¿Qué aprenderás hoy?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className={`h-2 ${card.color}`} />
              <div className="p-6">
                <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 ">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{card.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {hoveredCard === index ? 'Comenzar curso' : '4 lecciones'}
                  </span>
                  <motion.button
                    className={`${card.color} text-white rounded-full p-2 hover:opacity-90 transition-opacity`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={"/activities"}>
                    <IoMdAdd size={24} />
                    </Link>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}