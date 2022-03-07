import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from '../components/Navigation'

export const ProblemPage = () => {
    const problems = [
        {
            'id':'001',
            'title': 'Problem A92',
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.",
        },
        {
            'id':'002',
            'title': 'Problem A95',
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.",
        },
        {
            'id':'003',
            'title': 'Problem A99',
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.",
        },
    ]

    return (
        <div className='App'>
            <Navigation/>
            
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
                        {
                            problems.map(p => (
                                
                                <div className="mb-5   card-section">
                                    <div className="d-flex justify-content-between align-items-center">
                                    <p ><b>Title:</b> <span>{p.title}</span></p>
                                    <Link to={'#'+p.id} className="btn btn-light bg-light">Start Coding</Link>
                                    </div>
                                    <p ><b>Description:</b> <span><p >{ p.description}</p></span></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
