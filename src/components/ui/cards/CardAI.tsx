import { titleFont } from "@/config";
import { FaLocationArrow } from "react-icons/fa";



export const CardAI = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-gradient-to-r from-green-500 to-cyan-900 text-white mb-6 rounded-xl p-4">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <span className={`${titleFont} text-2xl font-medium `}>Consulta con un expertAI</span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium">Un asistente personalizado en los temas más utilizados en Learn Manufacturing</p>
          <button className="bg-yellow-600 hover:bg-yellow-800 shadow-xl rounded-full p-4"
          title="ia">            
            <FaLocationArrow size={20} />
          </button>
        </div>
      </div>
      </div>
  )
}
