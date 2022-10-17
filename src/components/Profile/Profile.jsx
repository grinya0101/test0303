import React from 'react';
import ProfileInfo from '../Dialogs/ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {

  

  return (
    <div className=''>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  )
}

export default Profile;