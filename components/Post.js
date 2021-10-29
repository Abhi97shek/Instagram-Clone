import { addDoc, collection, doc, onSnapshot,orderBy, query, serverTimestamp, setDoc } from "@firebase/firestore";
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,PaperAirplaneIcon
} from "@heroicons/react/outline";
    import { comment } from "postcss";
    import { useEffect, useState } from "react";
    import { db } from "../firebase";
    import Moment from "react-moment";
    import { async } from "@firebase/util";
import { useSession } from "next-auth/react";
    function Post({id,username,userImg,img,caption}) {


    const {data:session} = useSession();
    const [comment,setComment] = useState("");
    const [comments,setComments] = useState([]);
   
    useEffect(()=>{

        return onSnapshot(query(collection(db,'posts',id,'comments'),orderBy('timestamp','desc')),snapshot=>{
            setComments(snapshot.docs)
        })

    },[db]);


    const sendComments = async (e)=>{
        e.preventDefault();

        const commentToSend = comment;

        setComment("");

        await addDoc(collection(db,'posts',id,'comments'),{

            comment:commentToSend,
            username:session.user.username,
            timestamp:serverTimestamp()
        })
    };
    return (
        <div className="bg-white my-7 border rounded-sm">
           
            <div className="flex items-center p-5 ">
                <img src={session.user.image} className="w-12 h-12 object-contain border p-1 mr-3 rounded-full" alt="profile-image" />
                <p className="flex-1 font-bold">{session.user.username}</p>
                <DotsHorizontalIcon className="h-5"/>
            </div>

            <img src={img} className="object-cover" />



           <div className="flex justify-between px-4 pt-4">
           <div className="flex space-x-4">
               <HeartIcon className="btn"/>
                <ChatIcon className="btn" />
               <PaperAirplaneIcon className="btn" /> 
               
           </div>
            <BookmarkIcon className="btn"/>
           </div>

            
        {/* Caption */}
            <div>
                <p className="p-5 truncate">
                    <span className="font-bold mr-1">{username} </span>
                    {caption}
                </p>

            </div>

           {/* comments */}
            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                        {comments.map(comment => (

                            <div key={comment.id} className="flex items-center">
                                <img className="h-7 rounded-full mr-2" src={session.user.image}  alt="profile-iamge" /> 
                                <p className="text-sm flex-1 "><span className="font-bold mr-2">{comment.data().username}</span>{comment.data().comment}</p>
                                <Moment fromNow className="pr-5 text-xs">
                                    {comment.data().timestamp?.toDate()}
                                </Moment>

                            </div>    
                        ))}

                </div>
            )}
           {/* index Box */}
           <form className="flex p-4 items-center">
               <EmojiHappyIcon className="h-7" />
               <input value={comment} onChange={e=> setComment(e.target.value)}type="text"  className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a comment ..."/>
               <button type="submit" disabled={!comment.trim()} className="font-semibold text-blue-400" onClick={sendComments}>Post</button>
           </form>
        </div>
    )
}

export default Post
