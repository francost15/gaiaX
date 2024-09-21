'use client'

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { BookOpen, Clock, Star, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Navbar } from '@/components';

const books = [
  {
    title: "Liderazgo Efectivo",
    author: "Maria González",
    category: "Gestión",
    rating: 4.5,
    duration: "3h 20m",
    image: "/placeholder.svg?height=200&width=150"
  },
  {
    title: "Innovación en RR.HH.",
    author: "Carlos Ruiz",
    category: "Recursos Humanos",
    rating: 4.2,
    duration: "2h 45m",
    image: "/placeholder.svg?height=200&width=150"
  },
  {
    title: "Cultura Organizacional",
    author: "Ana Martínez",
    category: "Desarrollo Organizacional",
    rating: 4.8,
    duration: "4h 10m",
    image: "/placeholder.svg?height=200&width=150"
  },
  {
    title: "Estrategias de Compensación",
    author: "Luis Hernández",
    category: "Compensaciones",
    rating: 4.3,
    duration: "3h 50m",
    image: "/placeholder.svg?height=200&width=150"
  }
];

const categories = ["Todos", "Gestión", "Recursos Humanos", "Desarrollo Organizacional", "Compensaciones"];

export default function Component() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [filter, setFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const filteredBooks = books.filter(book => 
    (filter === "Todos" || book.category === filter) &&
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-r from-green-600 to-blue-900 py-8 mb-8">
          <h1 className="text-5xl font-bold text-white text-center">
            Biblioteca GaiaX
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="relative w-full sm:w-auto mb-4 sm:mb-0">
              <input 
                className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Buscar libros o autores..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full ${
                    filter === category 
                      ? 'bg-green-700 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {filteredBooks.map((book, index) => (
                  <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pr-4">
                    <div className="h-full transform transition-all duration-300 hover:shadow-lg bg-white rounded-lg overflow-hidden border border-gray-200">
                      <div className="p-0">
                        <img 
                          src={book.image} 
                          alt={`Portada de ${book.title}`} 
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
                        <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                        <div className="flex items-center mb-2">
                          <BookOpen className="w-4 h-4 mr-1 text-blue-500" />
                          <span className="text-xs">{book.category}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="text-sm">{book.rating}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-green-500" />
                            <span className="text-sm">{book.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <button className="w-full bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition-colors duration-300">
                          Leer ahora
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              title='Previous'
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              title='Next'
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}