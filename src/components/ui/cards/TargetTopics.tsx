import { VscDebugStart } from "react-icons/vsc"

const cards = [
  {
    title: "Gestión del Talento",
    description: "Estrategias para atraer y retener el mejor talento.",
  },
  {
    title: "Compensaciones y Beneficios",
    description: "Programas de remuneración y beneficios competitivos.",
  },
  {
    title: "Tamaño de personal",
    description: "Optimización de la estructura organizacional.",
  },
  {
    title: "Relaciones Laborales",
    description: "Mantenimiento de un ambiente laboral positivo.",
   
  },
]
export const TargetTopics = () => {
  return (
    <>
    <div className="ml-12">
    <h2 className="text-xl font-bold mb-4">Hola User</h2>
    <p className="text-sm text-gray-600 ">¿Qué aprenderás hoy?</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3  gap-6 p-6 -mt-6 ">
    {cards.map((card, index) => (
      <div key={index} className="overflow-hidden transition-all rounded-xl shadow-md hover:shadow-2xl">
        <div className="p-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <div className="w-6 h-6 text-primary" />
          </div>
          <div className="text-lg font-semibold">{card.title}</div>
        </div>
     
        <div className="p-4 pt-0 flex items-center">
          <p className="text-sm text-muted-foreground">{card.description}</p>
          <div className="flex ml-auto justify-end -mt-4">
            <button className="bg-yellow-600  rounded-full p-2 hover:bg-yellow-800"
            title="start-course">
              <VscDebugStart size={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
    </>
  )
}
