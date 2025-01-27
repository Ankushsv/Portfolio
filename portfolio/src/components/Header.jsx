import React from 'react'
import { Link , NavLink} from 'react-router-dom'

export default function Header (){
  return (
    <>
      <div className='w-full   bg-gray-700 '>
        <div className='flex justify-between items-center p-3'>
          <div className='text-2xl text-blue-500 font-bold '>
            <Link to = '/'>
            Ankush Singh
            </Link>
          </div>
          <div className='flex space-x-10 font-bold font font-playwrite mx-12'>
            <NavLink
             to = "/"
             className={({isActive})=>{
               return `${isActive ? 'text-emerald-500' : 'text-white'} text-sm`
             }}>
             Home
            </NavLink>
             <NavLink
             to = "/about"
             className={({isActive})=>{
               return `${isActive ? 'text-emerald-500' : 'text-white'} text-sm`
             }}
             >
                About
             </NavLink>
             <NavLink to={"/projects"}
               className={({isActive})=>{
                return `${isActive ? 'text-emerald-500' : 'text-white'} text-sm`
              }}
             >
              Projects
             </NavLink>
             <NavLink to={"/skills"}
               className={({isActive})=>{
                return `${isActive ? 'text-emerald-500' : 'text-white'} text-sm`
              }}>
              Skills
             </NavLink>
              <NavLink to={"/trial"}
                className={({isActive})=>{
                  return `${isActive ? 'text-emerald-500' : 'text-white'} text-sm`
                }}>
                Contact
              </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

