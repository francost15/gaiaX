'use client'
import React, { useState } from 'react'
import {  Send, Image, Paperclip, Smile, MoreVertical, Star, Video, Trophy } from 'lucide-react'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  isAchievement?: boolean
}

interface Contact {
  id: number
  name: string
  avatar: string
  lastMessage: string
  lastMessageTime: string
}

const contacts: Contact[] = [
  { id: 1, name: "Francisco Antonio Escalante", avatar: "/placeholder-user.jpg", lastMessage: "Hola Franco, buenas tardes mucha...", lastMessageTime: "13 sept" },
  { id: 2, name: "Sade Romo", avatar: "/placeholder-user.jpg", lastMessage: "¡Alcanza objetivos sostenibles con Pac...", lastMessageTime: "8 sept" },
  { id: 3, name: "Franklin Tavarez", avatar: "/placeholder-user.jpg", lastMessage: "¡Hola, Franco! Me llamo Franklin y...", lastMessageTime: "28 ago" },
]

const generalMessages: Message[] = [
  { id: 1, sender: "Sistema", content: "Franco Sanchez ha alcanzado el logro '¡En llamas!'", timestamp: "Hoy 10:30", isAchievement: true },
  { id: 2, sender: "María López", content: "¡Felicidades Franco! Sigue así", timestamp: "Hoy 10:35" },
  { id: 3, sender: "Juan Pérez", content: "Impresionante logro, ¿cómo lo conseguiste?", timestamp: "Hoy 10:40" },
]

export default function CommunityPlatform() {
  const [activeTab, setActiveTab] = useState("general")
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [messages, setMessages] = useState<Message[]>(generalMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: "Franco Sanchez",
        content: newMessage,
        timestamp: "Ahora"
      }
      setMessages([...messages, newMsg])
      setNewMessage("")
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/3 bg-white border-r">
        <div className="p-4 border-b">
          <input
            type="search"
            placeholder="Buscar mensajes"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="w-full">
          <div className="flex">
            <button className="w-1/2 p-2 text-center border-b" onClick={() => setActiveTab("general")}>Chats</button>
            <button className="w-1/2 p-2 text-center border-b" onClick={() => setActiveTab("contacts")}>Contactos</button>
          </div>
          <div className="overflow-auto h-[calc(100vh-120px)]">
            {activeTab === "general" && contacts.map(contact => (
              <div
                key={contact.id}
                className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedContact(contact)
                  setActiveTab("private")
                }}
              >
                <img src={contact.avatar} alt={contact.name} className="h-10 w-10 rounded-full" />
                <div className="ml-4 flex-1">
                  <div className="font-semibold">{contact.name}</div>
                  <div className="text-sm text-gray-500 truncate">{contact.lastMessage}</div>
                </div>
                <div className="text-xs text-gray-400">{contact.lastMessageTime}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="font-semibold">
            {activeTab === "general" ? "Chat General" : selectedContact?.name}
          </div>
          <div className="flex space-x-2">
            <button className="p-2">
              <Video className="h-4 w-4" />
            </button>
          
            <button className="p-2">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-auto">
          {messages.map(message => (
            <div key={message.id} className={`mb-4 ${message.isAchievement ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 rounded-lg shadow-md border border-yellow-300' : ''}`}>
              {message.isAchievement && (
                <div className="flex items-center mb-2">
                  <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                  <span className="text-lg font-bold text-yellow-700">¡Nuevo Logro Desbloqueado!</span>
                </div>
              )}
              <div className={`font-semibold ${message.isAchievement ? 'text-yellow-800' : ''}`}>{message.sender}</div>
              <div className={`${message.isAchievement ? 'text-yellow-900 font-medium' : ''}`}>{message.content}</div>
              <div className={`text-xs ${message.isAchievement ? 'text-yellow-600' : 'text-gray-400'}`}>{message.timestamp}</div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <button className="p-2">
              <Paperclip className="h-4 w-4" />
            </button>
            <button className="p-2">
              <Image className="h-4 w-4" />
            </button>
            <button className="p-2">
              <Smile className="h-4 w-4" />
            </button>
            <button onClick={handleSendMessage} className="p-2">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
