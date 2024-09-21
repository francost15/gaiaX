import { titleFont } from "@/config";
import { FaLocationArrow } from "react-icons/fa";



export const CardAI = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex space-x-4">
        <div className="flex-1 bg-gradient-to-r from-green-500 to-cyan-900 text-white mb-6 rounded-xl p-4">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <span className={`${titleFont} text-2xl font-medium`}>Ingresa el codigo de tu empresa</span>
            <input 
              type="text" 
              className="ml-4 p-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              placeholder="123456" 
            />
          </div>
        </div> 
    
      </div>
    </div>
  )
}
