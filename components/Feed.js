import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-width-6xl mx-auto shadow-sm">

            
            <section className="col-span-2">
                <Stories />
                <Posts />
            </section>
          

            <section className="hidden xl:inline-grid md:col-span-1">
            <div className="fixed">
                <MiniProfile />
                <Suggestions />
            </div>    
            </section>

            {/* section */}
                {/* Mini_profile */}
                {/* Suggestion */}
        </main>
    )
}

export default Feed;
