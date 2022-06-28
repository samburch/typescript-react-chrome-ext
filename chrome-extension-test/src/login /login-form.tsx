import React, { useState } from 'react'
import '../App.css'

interface Props {
    error: string;
    setError?: React.Dispatch<React.SetStateAction<string>>;
    Login: any;
  }

const LoginForm = ({ Login, error } : Props) => {


    const [details, setDetails] = useState<({name: string, password: string})>({
      name: "",
      password: ""
    });

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        Login(details)
    }

  return (
    <form className='mx-auto mt-4' onSubmit={submitHandler} >
    <h3 className='text-sm'>Sign in with your details</h3>
    {(error != "") ? (
        <div className="block bg-orange-200 border border-orange-400 text-orange-500 rounded-md mt-2 p-2 text-xs">{error}</div>) 
        : ""
    }
    <label className='block text-sm mt-2'>
        {/* Name */}
        <input className='block w-full mt-1 px-3 py-2 bg-white border border-slate-300 hover:border-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md text-sm shadow-sm placeholder-slate-400' 
        type="text" 
        name="name"
        placeholder='Name'
        onChange={e => setDetails({...details, name: e.target.value})}
        value={details.name}
        autoComplete='name'
        />
    </label>
    <label className='block text-sm mt-2'>
        {/* Password */}
        <input className='block w-full mt-1 px-3 py-2 bg-white border border-slate-300 hover:border-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md text-sm shadow-sm placeholder-slate-400' 
        type="password" 
        name="password"
        placeholder='Password'
        onChange={e => setDetails({...details, password: e.target.value})}
        value={details.password}
        autoComplete='current-password'
        />
    </label>
    <input className='transition-all bg-sky-600 hover:bg-sky-700 w-full px-8 py-2 mt-4 rounded-full text-white' 
    type="submit" 
    value="Login" />
    </form>
  )
}

export default LoginForm