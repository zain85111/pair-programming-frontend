import React from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
    return (
        <div className="container main">
            <div className="row text-content">
                <div className='text-light col-6 d-flex flex-column align-items-start justify-content-center'>
                    <h1 className='my-3'>COLLABORATIONS MADE SIMPLE!!!!</h1>
                    <h5 className='my-3'>Developers and companies around the globe collaborate and hire at CodePair - the simplest yet powerful collaboration platform</h5>
                    <div className='my-3'>
                        <Link to={'/signup'} className="btn btn-light px-4" >SIGN UP</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
