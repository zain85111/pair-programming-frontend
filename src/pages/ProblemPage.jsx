import React from 'react'
import { Link } from 'react-router-dom'

export const ProblemPage = () => {
    return (
        <div className='App'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent text-light">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="/">Code Pair</a>
                    <div className="icons text-light d-flex justify-content-evenly align-items-center w-25">
                        <Link to={'/problemPage'} className='btn btn-dark bg-transparent border-0'>Problems</Link>
                        <Link to={'/matchingUsers'} className='btn btn-dark bg-transparent border-0'>Matching Users</Link>
                        <Link to={'/messeges'} className="btn btn-dark bg-transparent border-0 material-icons"><span className="material-icons">message</span></Link>
                        <Link to={'/notifications'} className="btn btn-dark bg-transparent border-0 material-icons"><span className="material-icons">notifications</span></Link>
                        <Link to={'/profile'} className="btn btn-dark bg-transparent border-0 material-icons"><span className="material-icons">account_circle</span></Link>
                    </div>
                </div>
            </nav>
            
            <div className='d-flex justify-content-start pageHeight bg-light'>
                <div className='sidebar '>
                    <div className="sideNav w-75  d-flex flex-column justify-content-around align-items-center">
                        <div className='d-flex flex-column justify-content-around  w-100 px-4'>
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className='mb-3 text-left'>Difficulty level</h3>
                                <p class="material-icons">info</p>
                            </div>
                            <div className=''>
                                <div className='sideNav-btn mb-3'>
                                    <input type="radio" className='me-3'  />
                                    <label htmlFor="">Beginner</label>
                                </div>
                                <div className='sideNav-btn mb-3'>
                                    <input type="radio" className='me-3'  />
                                    <label htmlFor="">Intermediate</label>
                                </div>
                                <div className='sideNav-btn mb-3'>
                                    <input type="radio" className='me-3'  />
                                    <label htmlFor="">Advanced</label>
                                </div>

                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-around  w-100 px-4'>
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className='mb-3 text-left'>Topics</h3>
                                <p class="material-icons">info</p>
                            </div>
                            <div className=''>
                                <div className='sideNav-btn mb-3'>
                                    <input type="radio" className='me-3'  />
                                    <label htmlFor="">Fundamentals</label>
                                </div>
                                <div className='sideNav-btn mb-3'>
                                    <input type="radio" className='me-3'  />
                                    <label htmlFor="">OOP</label>
                                </div>
                                <div className='sideNav-btn mb-3'>
                                    <input type="radio" className='me-3'  />
                                    <label htmlFor="">DSA</label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-section col pt-4 d-flex flex-column justify-content-evenly align-items-center">
                    <div className=' w-75 '>
                        <div className="mb-5   card-section">
                            <div className="d-flex justify-content-between align-items-center">
                            <p ><b>Title:</b> <span>Problem A9</span></p>
                            <Link className="btn btn-light bg-light">Start Coding</Link>
                            </div>
                            <p ><b>Description:</b> <span><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.</p></span></p>
                        </div>
                        <div className="mb-5   card-section">
                            <div className="d-flex justify-content-between align-items-center">
                            <p ><b>Title:</b> <span>Problem A9</span></p>
                            <Link className="btn btn-light bg-light">Start Coding</Link>
                            </div>
                            <p ><b>Description:</b> <span><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.</p></span></p>
                        </div>
                        <div className="mb-5   card-section">
                            <div className="d-flex justify-content-between align-items-center">
                            <p ><b>Title:</b> <span>Problem A9</span></p>
                            <Link className="btn btn-light bg-light">Start Coding</Link>
                            </div>
                            <p ><b>Description:</b> <span><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.</p></span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
