import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: 'Its my first post', likesCount: 11 },
  { id: 3, message: 'Its my first post', likesCount: 11 },
  { id: 4, message: 'Blabla', likesCount: 11 },
  { id: 5, message: 'Dada', likesCount: 11 },
];

let postEl = posts.map((p) =>{
  return <Post message={p.message} likesCount={p.likesCount} />
})


function MyPosts(props) {
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

      </div>
      <div className={s.posts}>
      {postEl}
      </div>
    </div>
  );
}

export default MyPosts;