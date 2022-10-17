import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';





function MyPosts(props) {

  let postEl = props.posts.map((p) =>{
    return <Post message={p.message} likesCount={p.likesCount} />
  })

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