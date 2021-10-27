import Post from "./Post";


const posts =[
    {
    id:"123",
    username:"Abhishek",
    userImg: "https://lh3.googleusercontent.com/a-/AOh14GjTwGo_KZBZ-zO9k4mkXjqeH8gxocmK9HO78BUYDQ=s288-p-rw-no",
    img: "https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    caption: "Subscribe the Like Button",
},
{
id:"123",
username:"Abhishek",
userImg: "https://lh3.googleusercontent.com/a-/AOh14GjTwGo_KZBZ-zO9k4mkXjqeH8gxocmK9HO78BUYDQ=s288-p-rw-no",
img: "https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
caption: "Subscribe the Like Button",
}
];
function Posts() {
    return (
        <div>
           {posts.map(post=> (

                <Post key={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
           ))}
                
            
        </div>
    )
}

export default Posts
