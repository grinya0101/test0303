import React from 'react';
import ProfileInfo from '../Dialogs/ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className=''>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;