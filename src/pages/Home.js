import  React, { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from "../firebase-config";

function Home() {
    const [ postList, setPostList ] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async() => {
            const data = await getDocs(postsCollectionRef);
            //console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getPosts();
    });
    const deletePost = async(id) => {
        const postDoc = doc(db, "post", id);
        await deleteDoc(postDoc);
    }
  return <div className='homePage'>
    {postList.map((post) => {
    return (
        <div className='post'>
        {post.title}
        <div className='postHeader'>
            <div className='title'>
                <h1>{post.title}</h1>
            </div>
            <div className='deletePost'>
                <button 
                    onClick={() => {
                        deletePost(post.id);
                    }}>
                    &#128465;
                </button>
            </div>
        </div>
        <div className='postTextContainer'>{post.postText}</div>
        <h3>@{post.author.id}</h3>
    </div>

    )
    
  })}</div>
}

export default Home;