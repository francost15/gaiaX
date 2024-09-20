"use client";
// import { login, registerUser } from '@/actions';
// import clsx from 'clsx';
import Link from 'next/link'
import { useState } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { MdOutlineVerifiedUser } from 'react-icons/md';
type FormInputs = {
    name: string;
    email: string;
    password: string;
}
export const RegisterForm = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const {register,handleSubmit,formState: {errors}} = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = async(data) => {
        setErrorMessage('')
        const {name,email,password} = data;
        const resp = await registerUser(name,email,password);
        if (!resp.ok) {
            setErrorMessage(resp.message)
            return
        }
        await login(email.toLowerCase(),password);
        window.location.replace('/')
    // server actions
    }
    return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
    {
        errors.name?.type === 'required' && (
            <span className='text-white bg-red-500 rounded-md p-2 text-center'>El nombre es obligatorio</span>
        )
    }{
        errors.email?.type === 'required' && (
            <span className='text-white bg-red-500 rounded-md p-2 text-center'>El email es obligatorio</span>
        )
    }
    {
        errors.password?.type === 'required' && (
            <span className='text-white bg-red-500 rounded-md p-2 text-center'>La contraseña es obligatoria</span>
        )
    }
    <span className='text-red-500 text-center'>{errorMessage}</span>
    <label htmlFor="name">Nombre completo</label>
    <input
    autoFocus
    className={
        clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5"
            ,{
                'border-red-500 no-underline': !!errors.name
            }
        )
    }
    type="text"
        {...register('name',{required:true})}
    />


    <label htmlFor="email">Correo electrónico</label>
    <input
        className={
            clsx(
                "px-5 py-2 border bg-gray-200 rounded mb-5"
                ,{
                    'border-red-500 no-underline': !!errors.email
                }
            )
        }
        type="email"
        {...register('email', {required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/})} 
        />


    <label htmlFor="password">Contraseña</label>
    <input
        className={
            clsx(
                "px-5 py-2 border bg-gray-200 rounded mb-5"
                ,{
                    'border-red-500 no-underline': !!errors.password
                }
            )
        }
        type="password"
        {...register('password', {required: true, minLength: 6})}
    />

    <button
        className="btn-primary">
        Crear Cuenta
    </button>


    {/* divisor l ine */ }
    <div className="flex items-center my-5">
      <div className="flex-1 border-t border-gray-500"></div>
      <div className="px-2 text-gray-800">O</div>
      <div className="flex-1 border-t border-gray-500"></div>
    </div>

    <Link
      href="/auth/login" 
      className="btn-secondary text-center">
      Ya tienes una cuenta? Ingresa
    </Link>

  </form>
  )
}
