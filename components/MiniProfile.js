import { useSession,signIn,signOut } from 'next-auth/react'
import React from 'react'

function MiniProfile() {

    const {data :session } = useSession();
    console.log(session);
    return ( 
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src={session?.user?.image} alt="Profile-Image" className="rounded-full border p-2 w-16 h-16"></img>
        
            <div className="flex-1 mx-4">
                <h2 className="font-bold">{session?.user?.username}</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
        <button onClick={signOut} className="text-blue-400 text-sm font-semibold">Sign Out </button>
        </div>
    )
}

export default MiniProfile
