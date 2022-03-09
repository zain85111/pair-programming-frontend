import React from 'react'
import { Link } from 'react-router-dom'

export const EditProfile = () => {
    return (
        <div className='App text-light'>
            <div className="center-section profileEdit-bg row">
                <div className="col-8 d-flex flex-column justify-content-evenly align-items-cente px-5">
                    <Link to='/profile' className='text-light'><span className="material-icons ">chevron_left</span></Link>
                    <h3>Edit Profile</h3>
                    <div className=''>
                        <div className='mb-3'>
                            <form className=' '>
                                <div className="d-flex justify-content-between">
                                    <div className="mb-4">
                                        <label className="form-label">Experience</label>
                                        <input type="email" className="form-control bg-transparent border-2 " placeholder=''  aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Education</label>
                                        <input type="password" className="form-control bg-transparent border-2" placeholder='' />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Skills</label>
                                    <input type="email" className="form-control bg-transparent border-2 " placeholder='' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">About</label>
                                    <textarea name="" className='form-control bg-transparent border-2' ></textarea>
                                </div>                                
                            </form> 
                        </div>
                    </div>
                    <div>
                        <Link className="profile-section-btn">Save Changes</Link>
                    </div>
                </div>
                <div className=" col-4  d-flex flex-column justify-content-around align-items-center">
                    <div className='d-flex flex-column align-items-center  w-100'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU" alt="" className="circle-img mb-3" width={200} />
                        <Link to={'/editProfile'} className="profile-section-btn">Edit Image</Link> 
                    </div>
                    {/* <Link to={'/editProfile'} className="profile-section-btn">Save Profile</Link>  */}
                </div>
            </div>
        </div>
    )
}
