'use client'

import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function Dashboard() {
  const skillChartRef = useRef<HTMLCanvasElement | null>(null)
  const completionChartRef = useRef<HTMLCanvasElement | null>(null)
  const skillChartInstance = useRef<Chart | null>(null)
  const completionChartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    const createOrUpdateChart = (
      chartRef: React.RefObject<HTMLCanvasElement>,
      chartInstance: React.MutableRefObject<Chart | null>,
      config: any
    ) => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d')
        if (ctx) {
          if (chartInstance.current) {
            chartInstance.current.destroy()
          }
          chartInstance.current = new Chart(ctx, config)
        }
      }
    }

    const skillChartConfig = {
      type: 'bar' as const,
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Habilidades Técnicas',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'Habilidades Blandas',
            data: [78, 80, 85, 87, 76, 78],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    }

    const completionChartConfig = {
      type: 'doughnut' as const,
      data: {
        labels: ['Completado', 'En progreso', 'No iniciado'],
        datasets: [{
          data: [65, 25, 10],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(255, 99, 132, 0.6)',
          ],
        }],
      },
      options: {
        responsive: true,
      },
    }

    createOrUpdateChart(skillChartRef, skillChartInstance, skillChartConfig)
    createOrUpdateChart(completionChartRef, completionChartInstance, completionChartConfig)

    // Cleanup function
    return () => {
      if (skillChartInstance.current) {
        skillChartInstance.current.destroy()
      }
      if (completionChartInstance.current) {
        completionChartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard de Capacitación</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Total de Empleados</h2>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
          <p className="text-sm text-gray-500">+20.1% desde el mes pasado</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Cursos Completados</h2>
          <p className="text-3xl font-bold text-green-600">573</p>
          <p className="text-sm text-gray-500">+180.1% desde el mes pasado</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Crecimiento Promedio de Habilidades</h2>
          <p className="text-3xl font-bold text-purple-600">+12.5%</p>
          <p className="text-sm text-gray-500">+4.1% desde el mes pasado</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Horas de Aprendizaje Activo</h2>
          <p className="text-3xl font-bold text-orange-600">2,345</p>
          <p className="text-sm text-gray-500">+42.3% desde el mes pasado</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Progreso de Habilidades por Mes</h2>
          <canvas ref={skillChartRef} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Estado de Finalización de Cursos</h2>
          <canvas ref={completionChartRef} />
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Habilidades Más Demandadas</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Liderazgo</span>
            <span className="text-blue-600 font-semibold">78% de empleados capacitados</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Resolución de Problemas</span>
            <span className="text-blue-600 font-semibold">66% de empleados capacitados</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Comunicación Efectiva</span>
            <span className="text-blue-600 font-semibold">82% de empleados capacitados</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Análisis de Datos</span>
            <span className="text-blue-600 font-semibold">59% de empleados capacitados</span>
          </div>
        </div>
      </div>
    </div>
  )
}