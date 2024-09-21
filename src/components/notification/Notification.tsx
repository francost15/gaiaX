import React from 'react'

export const NotificationComponent = () => {
  return (
    <div className='fixed top-14 right-4 w-48 h-48 border rounded-md shadow-xl bg-white'>
        <span>
            <p className='text-center text-xl font-semibold mt-12 text-black'>No tienes notificaciones</p>
        </span>
    </div>
  )
}
