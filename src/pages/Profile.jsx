import React from 'react'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className='App text-light'>
      <div className="center-section profile-bg row">
        <div className=" col-4 profile-section-sideBar  justify-content-star">
          <Link to='/matchingUsers' className='btn btn-dark bg-transparent border-0 '><span className="material-icons m-2">chevron_left</span></Link>
          <div className='d-flex flex-column align-items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU" alt="" className="circle-img mb-3" width={100} />
            <h5 className='mb-3'>@johnDoe</h5>
            <Link to={'/editProfile'} className="profile-section-btn">Edit Profile</Link> 
          </div>
        </div>
        <div className="col-8 profile-details-section d-flex flex-column justify-content-evenly align-items-cente px-5">
          <h3>Profile Settings</h3>
          <div className=''>
            <h5 className='mb-5'>Profile Details</h5>
            <div className='mb-3'>
              <p><b>Education: </b><span>Lorem ipsum dolor sit amet.</span></p>
              <p><b>Experience: </b><span>Lorem ipsum dolor sit amet.</span></p>
              <p><b>Skills: </b><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ut.</span></p>
              <p className='mt-5'><b>About: </b><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptas non excepturi sequi, explicabo quae neque pariatur aperiam provident. Recusandae.</span></p>
            </div>
          </div>
          <div>
            <button className="profile-section-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
