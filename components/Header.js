import Image from 'next/Image';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
   
}  from "@heroicons/react/outline";
import {HomeIcon} from  "@heroicons/react/solid"
import Modal from './Modal';
import { useRecoilState } from 'recoil';
import {modalState} from '../atoms/modalAtom';
import {useSelector} from 'react-redux';
import { useSession,signIn,signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
function Header() {

    const {data:session} =useSession(); 
    const router =useRouter();
    const [open,setOpen] = useRecoilState(modalState);
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
                <div className="flex justify-between items-center  max-w-6xl mx-5 xl:mx-auto align-center">


                    <div  className="relative hidden lg:inline-grid  w-24 cursor-pointer ">

                        <img src="https://links.papareact.com/ocw" alt="desktop-instagram-logo"/>

                    </div>

                    <div  className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                        <img src="https://links.papareact.com/jjm" alt="mobile-istagram-logo"></img>
                    </div>

                    {/* Search Input field */}
                    
                    <div className="mt-1 relative p-3 rounded-md ">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                            <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" type="text" placeholder="Search" />
                    </div>
                  

                    {/* Icons on the Right Side */}
                  <div className="flex items-center justify-end space-x-4">
                         <HomeIcon className="navBtn"/>
                         <MenuIcon className="h-6 w-6 md:hidden cursor-pointer  "/>
                        
                        {session ? (
                            <>
                             <div className="relative navBtn">
                             <PaperAirplaneIcon className="navBtn rotate-45"/>
                             <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 flex items-center justify-center animate-pulse text-white rounded-full">3</div>
                             </div>
                             
                              
                              <PlusCircleIcon onClick={()=>setOpen(true)} className="navBtn" />
                              <UserGroupIcon className="navBtn" />
                              <HeartIcon className="navBtn" />
                              <img src={session?.user?.image} onClick={signOut} alt="Profile-Image" className="h-10 w-10 rounded-full cursor-pointer"></img>
                              </>
                        ) : <button onClick={signIn}>Sign In</button>
                                
                        }
                       
                    </div>

                    
                    
                </div>

                <Modal />
        </div>
    )
}

export default Header
