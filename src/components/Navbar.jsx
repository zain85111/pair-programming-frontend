import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent text-light">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="#">Why CodePair?</a>
                    <Link className="btn btn-outline-light px-4" to={'/login'} >Login</Link>
                </div>
            </nav>
        </div>
    )
}
