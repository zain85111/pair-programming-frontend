import React from 'react'
import { Link } from 'react-router-dom'
import { Contact } from './Contact'
import { Footer } from './Footer'


export const Content = () => {
    return (
        <div className='content'>
            <div className="d-flex align-items-center content-nav">
                <Link to={'/'} className='btn text-light mx-3'>Code</Link>
                <Link to={'/'} className='btn text-light mx-3'>Collaborate</Link>
                <Link to={'/'} className='btn text-light mx-3'>Hire</Link>
            </div>
            {/* Content 1 */}
            <div className="container text-dark">
                <div className="my-5">
                    <div className="row">
                        <div className='text-light col-6 d-flex flex-column align-items-start justify-content-center'>
                            <h1 className='my-3'>STORE YOUR CODE IN CLOUD FOREVER.</h1>
                            <h5 className='my-3'>Code you favorite and challenging problems on Codepair and store them on our forever free cloud platform to access it from anywhere, anytime.</h5>
                            <div className='my-3'>
                                <Link to={'/signup'} className="fs-4 text-light" >Sign Up For CodePair</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center '>
                    <img src="https://www.freecodecamp.org/news/content/images/2020/10/2-3.png" className="img-fluid" alt="" width={1000}/>
                </div>
            </div>
            
            {/* Banner  */}
            <div className=" content-banner position-relative ">
                <div className="container">
                    <div className="row">
                        <div className='text-light col-6 d-flex flex-column align-items-start justify-content-center mt-5'>
                            <h1 className='my-3'>STORE YOUR CODE IN CLOUD FOREVER.</h1>
                            <h5 className='my-3'>Code you favorite and challenging problems on Codepair and store them on our forever free cloud platform to access it from anywhere, anytime.</h5>
                            <div className='my-3'>
                                <Link to={'/signup'} className="fs-4 text-light" >Sign Up For CodePair</Link>
                            </div>
                        </div>
                    </div>
                    <div className=' banner-img'>
                        <img src="https://www.freecodecamp.org/news/content/images/2020/10/2-3.png" class="img-fluid" alt="" width={500}/>
                    </div>
                </div>
            </div>

            {/* Content 2  */}
            <div className="container ">
                <div className="">
                    <div className="row">
                        <div className="col">
                            <img src="https://www.freecodecamp.org/news/content/images/2020/10/2-3.png" className="img-fluid" alt="" width={700} />
                        </div>
                        <div className='text-light col-6 d-flex flex-column align-items-start justify-content-center'>
                            <h1 className='my-3'>STORE YOUR CODE IN CLOUD FOREVER.</h1>
                            <h5 className='my-3'>Code you favorite and challenging problems on Codepair and store them on our forever free cloud platform to access it from anywhere, anytime.</h5>
                            <div className='my-3'>
                                <Link to={'/signup'} className="fs-4 text-light" >Sign Up For CodePair</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact  */}
            <Contact />
            
            {/* Footer  */}
            <Footer/>
            
        </div>
    )
}
