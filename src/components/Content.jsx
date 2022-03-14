import React from 'react'
import { Link } from 'react-router-dom'
import { Contact } from './Contact'
import { Footer } from './Footer'
import BannerImg from '../assets/images/bannerImg.png'
import ContentImg1 from '../assets/images/contentImg1.png'
import ContentImg1_1 from '../assets/images/contentImg1-1.png'
import ContentImg2 from '../assets/images/contentImg2.png'


export const Content = () => {
    return (
        <div className='content'>
            <div className="d-flex align-items-center content-nav">
                <Link to={'/'} className='btn text-light mx-3'>Code</Link>
                <Link to={'/'} className='btn text-light mx-3'>Collaborate</Link>
                <Link to={'/'} className='btn text-light mx-3'>Hire</Link>
            </div>
            {/* Content 1 */}
            <div className="container ">
                <img src={ContentImg1_1} className="img-fluid contentImg1-1" alt="" width={1000}/>
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
                    <img src={ContentImg1} className="img-fluid" alt="" width={4000}/>
                </div>

            </div>
            
            {/* Banner  */}
            <div className=" content-banner position-relative ">
                <div className="container">
                    <div className="row">
                        <div className=' text-light col-6 d-flex flex-column align-items-start justify-content-center mt-5'>
                            <h1 className='my-3'>READY PLAYER TWO</h1>
                            <p className='fs-3 my-3'>Share the code editor with your teammate in a seamless manner. Find and fix vulnerabilites in your code. </p>
                            <div className='my-3'>
                                <Link to={'/signup'} className="fs-4 text-light" >Sign Up For CodePair</Link>
                            </div>
                        </div>
                    </div>
                    <div className=' banner-img'>
                        <img src={BannerImg} className="img-fluid" alt="" width={600}/>
                    </div>
                </div>
            </div>

            {/* Content 2  */}
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <img src={ContentImg2} className="img-fluid" alt="" width={700} />
                    </div>
                    <div className=' col-6 d-flex flex-column align-items-start justify-content-center'>
                        <h1 className='my-3'>HIRE NOW.</h1>
                        <h3 className='my-3'>A breakthrought in remote hiring process. Interviewer can select the problem and invite the Interviewee to code and judge in real-time.</h3>
                        <div className='my-3'>
                            <Link to={'/signup'} className="fs-4 text-dark" >Sign Up For CodePair</Link>
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
