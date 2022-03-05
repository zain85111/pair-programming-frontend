import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className='d-flex justify-content-start h-75 pageHeight'>
            <div className='sidebar'>
                <h1>CodePair</h1>
                <Link className='btn btn-transparent text-light' to='/'>Back to Homepage</Link>
            </div>
            <div className="form-section col d-flex flex-column justify-content-evenly align-items-center">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU" alt="" className="img-fluid circle-img" />
                </div>
                <form className='container w-50 '>
                    <h4 className='text-center mb-4'>Login</h4>

                    <div className="mb-4">
                        <input type="email" className="form-control bg-transparent border-2 " placeholder='Email address' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                        <input type="password" className="form-control bg-transparent border-2" placeholder='Subject' id="exampleInputPassword1" />
                    </div>
                    <div className="mb-4 ">
                        <input type="checkbox" />
                        <label for="exampleInputPassword1" className="form-label mx-3">Keep me logged in</label>
                    </div>
                    <div className="mb-4 d-flex justify-content-between">
                        <a href='/problemPage' className="btn btn-primary px-5">Login</a>
                        <Link to={'/signup'} className='btn text-dark'>Create an Account</Link>
                    </div>
                    </form>
            </div>
        </div>
    )
}
