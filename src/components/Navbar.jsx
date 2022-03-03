import React from 'react'

export const Navbar = () => {
    return (
        
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent text-light">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="#">Why CodePair?</a>
                    <button className="btn btn-outline-light px-4" >Login</button>
                </div>
            </nav>
        </div>
    )
}
