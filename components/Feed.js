import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import Posts from "./Posts";
import Stories from "./Stories";
import { useSession } from "next-auth/react";

function Feed() {

    const {data:session} = useSession();
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-width-6xl mx-auto shadow-sm ${!session && "!grid-cols-1 !max-width"}`} >

            
            <section className="col-span-2">
                <Stories />
               {session && ( <Posts />)

               } 
            </section>
          
        {session && (<section className="hidden xl:inline-grid md:col-span-1">
            <div className="fixed">
                <MiniProfile />
                <Suggestions />
            </div>    
            </section>)}
            

           
        </main>
    )
}

export default Feed;
