import Image from "next/image";
import { MdEdit } from "react-icons/md";

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
            {/* cards de tres columnas */}
            <div className="mt-4">
                <div className="flex flex-col-3 md:flex-row gap-4">
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
            <p className="text-sm text-gray-500">Logros</p>
            {/* cards de tres columnas */}
            <div className="mt-4">
                <div className="flex flex-col-4 md:flex-row gap-4">
                    <div className="flex-1 bg-gray-500 p-4 rounded-full shadow-md">
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-full shadow-md">
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <p className="text-sm text-gray-500">Node.js, Express, MongoDB, SQL</p>
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-full shadow-md">
                    <h4 className="font-semibold mb-2">DevOps</h4>
                    <p className="text-sm text-gray-500">Docker, Kubernetes, Jenkins, Git</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}