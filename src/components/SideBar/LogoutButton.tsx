'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { IoShieldOutline } from 'react-icons/io5';

export function LogoutButton() {
     const { data: dataSession, status } = useSession();

     if(status === 'loading'){
        return (
            <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <IoShieldOutline/>
                <span className="group-hover:text-gray-700">espere...</span>
            </button>
          )
     }

     if(status === 'unauthenticated'){
        return (
            <button onClick={() => signIn()} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <IoShieldOutline />
                <span className="group-hover:text-gray-700">Ingresar</span>
            </button>
          )
     }

     return (
        <button onClick={() => signOut()} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <IoShieldOutline />
            <span className="group-hover:text-gray-700">Log out</span>
        </button>
      )
}
