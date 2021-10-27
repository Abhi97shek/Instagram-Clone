import { useEffect, useState } from "react"
import faker from 'faker';
function Suggestions() {

    const [Suggestion,setSuggestion] = useState([]);


    useEffect(()=>{
        const suggestion = [...Array(5)].map((_,i)=> (
            {

      ...faker.helpers.contextualCard(),
            id:i
        }
        ));

        setSuggestion(suggestion);
    },[]);
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
        {
            Suggestion.map(profile=>(

                <div key={profile.id} className="flex items-center justify-between mt-3">
                    <img src={profile.avatar} className="w-10 h-10 rounded-full border p-[2px]" alt="profile-image"/>
                    <div className="flex-1 ml-4">
                            <h2 className="font-semibold text-sm">{profile.username}</h2>
                            <h3 className="text-gray-400 text-xs">Works at {profile.company.name}</h3>
                    </div>
                    <button className="text-blue-400 font-bold text-sm">Follow</button>    
                </div>
            ))
        }
        

        </div>


    )
}

export default Suggestions
