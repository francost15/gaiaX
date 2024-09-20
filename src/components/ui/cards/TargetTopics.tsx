
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
    <div className="grid grid-cols-2 md:grid-cols-3  gap-6 p-6 ">
    {cards.map((card, index) => (
      <div key={index} className="overflow-hidden transition-all rounded-xl shadow-md hover:shadow-2xl">
        <div className="p-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <div className="w-6 h-6 text-primary" />
          </div>
          <div className="text-lg font-semibold">{card.title}</div>
        </div>
        <div className="p-4 pt-0">
          <p className="text-sm text-muted-foreground">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
  )
}
