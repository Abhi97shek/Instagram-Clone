import { collection, onSnapshot, orderBy,query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";


// const posts =[
//     {
//     id:"123",
//     username:"Abhishek",
//     userImg: "https://lh3.googleusercontent.com/a-/AOh14GjTwGo_KZBZ-zO9k4mkXjqeH8gxocmK9HO78BUYDQ=s288-p-rw-no",
//     img: "https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
//     caption: "Subscribe the Like Button",
// },
// {
// id:"123",
// username:"Abhishek",
// userImg: "https://lh3.googleusercontent.com/a-/AOh14GjTwGo_KZBZ-zO9k4mkXjqeH8gxocmK9HO78BUYDQ=s288-p-rw-no",
// img: "https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
// caption: "Subscribe the Like Button",
// }
// ];
function Posts() {

    const [posts,setPosts] =useState([]);

    useEffect(()=>{
       const unsubscribe =   onSnapshot(query(collection(db,'posts'),orderBy('timestamp','desc')),snapshot=>{
             setPosts(snapshot.docs);
         })   
         return ()=>{
             unsubscribe;
         }
    },[db]);
    return (
        <div>
           {posts.map(post=> (

                <Post key={post.id} username={post.data().username} userImg={post.userImg} img={post.data().image} caption={post.data().caption} />
           ))}
                
            
        </div>
    )
}

export default Posts
