import React from 'react'
import { Link } from 'react-router-dom'


export const MatchingUsers = () => {
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
            </nav><hr className='bg-light'/>
            <div className='d-flex justify-content-start pageHeight'>
                <div className="container mt-4 bg-light rounded d-flex flex-column justify-content-evenly align-items-center">
                    <div className='container pt-4'>
                        <div className="mb-5 card-section d-flex  align-items-center">
                            <div className='me-5'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU" alt="" className="img-fluid circle-img" />
                            </div>
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p ><b>Username:</b> <span>User u24</span></p>
                                    <Link className="btn btn-primary ">Send Request</Link>
                                </div>
                                <p ><b>Status:</b> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!</span></p>
                                <p ><b>Description:</b> <span><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.</p></span></p>
                            </div>
                        </div>
                        <div className="mb-5 card-section d-flex  align-items-center">
                            <div className='me-5'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU" alt="" className="img-fluid circle-img" />
                            </div>
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p ><b>Username:</b> <span>User u24</span></p>
                                    <Link className="btn btn-primary ">Send Request</Link>
                                </div>
                                <p ><b>Status:</b> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!</span></p>
                                <p ><b>Description:</b> <span><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.</p></span></p>
                            </div>
                        </div>
                        <div className="mb-5 card-section d-flex  align-items-center">
                            <div className='me-5'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU" alt="" className="img-fluid circle-img" />
                            </div>
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p ><b>Username:</b> <span>User u24</span></p>
                                    <Link className="btn btn-primary ">Send Request</Link>
                                </div>
                                <p ><b>Status:</b> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!</span></p>
                                <p ><b>Description:</b> <span><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.</p></span></p>
                            </div>
                        </div>
                        <div className="mb-5 card-section d-flex  align-items-center">
                            <div className='me-5'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU" alt="" className="img-fluid circle-img" />
                            </div>
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p ><b>Username:</b> <span>User u24</span></p>
                                    <Link className="btn btn-primary ">Send Request</Link>
                                </div>
                                <p ><b>Status:</b> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!</span></p>
                                <p ><b>Description:</b> <span><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.</p></span></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

    )
}
