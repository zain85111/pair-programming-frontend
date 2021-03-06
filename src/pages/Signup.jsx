import React from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '../assets/images/googleIcon.png';

export const Signup = () => {
    return (
        
        <div className='d-flex justify-content-start h-75 pageHeight'>
          <div className='sidebar d-flex flex-column align-items-center'>
            <h1 className='my-3'>CodePair</h1>
            <Link to={'/'} className='d-flex justify-content-center align-items-center stats-link bg-transparent py-2'>
                <span class="material-icons">chevron_left</span>
                <h6  className="me-3 mt-2">Back to Homepage</h6>
            </Link>
          </div>
          <div className="form-section col d-flex flex-column justify-content-evenly align-items-center">
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU" alt="" className="img-fluid circle-img" />
            </div>
            <form className='container w-50 '>
              <h4 className='text-center mb-4'>Signup </h4>
              <div className="d-flex justify-content-between">
                <div className="mb-4">
                    <input type="email" className="form-control bg-transparent border-2 " placeholder='First Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-4">
                    <input type="password" className="form-control bg-transparent border-2" placeholder='Last Name' id="exampleInputPassword1" />
                </div>
              </div>
              <div className="mb-4">
                  <input type="email" className="form-control bg-transparent border-2 " placeholder='Email address' id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-4">
                  <input type="password" className="form-control bg-transparent border-2" placeholder='Subject' id="exampleInputPassword1" />
              </div>
              <div className="mb-4 ">
                  <input type="checkbox" />
                  <label for="exampleInputPassword1" className=" form-label mx-3">Keep me logged in</label>
              </div>
              <div className="mb-4 d-flex justify-content-between">
                  {/* <button type="submit" className=" btn btn-primary px-5">Sign Up</button> */}
                  <Link to={'/adminDashboard'}  className=" btn btn-primary px-5">Sign Up</Link>
                  <Link to={'/login'} className='btn text-dark'>Already Have an Account?</Link>
              </div>
            <h4 className="text-center mb-3">OR</h4>
              <button className='form-control  border-2'>
                <img src={GoogleIcon} alt="" className="img-fluid me-3" />Sign Up with Google
              </button>
            </form> 
          </div>
        </div>
    )
}
