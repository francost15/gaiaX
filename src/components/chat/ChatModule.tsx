"use client";
import React, { useState } from 'react'
import { IoChatbox, IoClose } from 'react-icons/io5'
import { InputSend } from './InputSend'

export const ChatModule = () => {
  const [isChatVisible, setIsChatVisible] = useState(false)

  const handleToggleChat = () => {
    setIsChatVisible(!isChatVisible)
  }

  return (
    <div>
      {isChatVisible ? (
        <div className='fixed bottom-4 right-4 w-72 h-auto border-2 rounded-md shadow-xl bg-white'>
          <div className='flex justify-between p-4 bg-gradient-to-r from-green-500 to-cyan-900 text-white rounded-md'>
            <span className='font-semibold'>
              ExpertAI
            </span>
            <button 
              className='hover:bg-red-600 rounded-md' 
              title='closeAI'
              onClick={handleToggleChat}
            >
              <IoClose size={25} />
            </button>
          </div>
          <div className='mt-4 p-2'>
            <span className='mt-4 p-2 rounded-lg border bg-neutral-800 text-white'>
              Hola como estas?
            </span>
            <div className='mt-4 flex justify-end'>
              <span className='p-2 rounded-lg border bg-green-200 text-black'>
                Hola quiero saber mas de
              </span>
            </div>
            <InputSend />
          </div>
        </div>
      ) : (
        <button 
          className='fixed bottom-4 right-4 p-3 rounded-xl bg-green-500 text-white shadow-xl'
          onClick={handleToggleChat}
        >
          <IoChatbox size={30} />
        </button>
      )}
    </div>
  )
}
