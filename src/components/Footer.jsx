import React from 'react'
import Swift from '../assets/images/swift.png'
import CLang from '../assets/images/c.png'
import JS from '../assets/images/js.png'
import Java from '../assets/images/java.png'
import CPP from '../assets/images/cpp.png'
import Python from '../assets/images/python.png'
import GO from '../assets/images/go.png'
import CSS from '../assets/images/css.png'
import Dart from '../assets/images/dart.png'

export const Footer = () => {
    return (
        <div>
            <footer className='footer container '>
                <div className="row">
                    <div className=" col-4">
                        <h2>Code Effectively With Your Teammate on CodePair.</h2>
                        <h6>Address</h6>
                        <p>Punjab University of Computing and Information Technology, Old Anarkali Lahore.</p>
                        <h6>Email</h6>
                        <p>info@CodePair.com</p>
                        <h6>Help</h6>
                        <p>Contact Us</p>
                    </div>
                    <div className="code-imgs d-flex flex-column  justify-content-between  col-8">
                        <div className="footer-lang-section d-flex justify-content-end ">
                            <div className="footer-lang me-5">
                                <img src={Python} className='img-fluid me-3' alt="" /><span className='fs-5 '>Python</span>
                            </div>
                            <div className=" footer-lang me-5">
                                <img src={Java} className='img-fluid me-3' alt="" /><span className='fs-5 '>Java</span>
                            </div>
                            
                            <div className="footer-lang ">
                                <img src={Swift} className='img-fluid me-3' alt="" /><span className='fs-5 '>Swift</span>
                            </div>
                            
                        </div>
                        <div className="footer-lang-section d-flex justify-content-evenly ">
                            
                            <div className="footer-lang ">
                                <img src={Dart} className='img-fluid me-3' alt="" /><span className='fs-5 '>Dart</span>
                            </div>
                            <div className="footer-lang">
                                <img src={JS} className='img-fluid me-3' alt="" /><span className='fs-5 '>Javascript</span>
                            </div>
                            <div className=" footer-lang">
                                <img src={CSS} className='img-fluid me-3' alt="" /><span className='fs-5 '>Bootstrap</span>
                            </div>
                            
                        </div>
                        <div className="footer-lang-section d-flex justify-content-start ">
                            <div className="footer-lang me-5">
                                <img src={GO} className='img-fluid me-3' alt="" /><span className='fs-5 '>GoLang</span>
                            </div>
                            <div className="footer-lang me-5">
                                <img src={CPP} className='img-fluid me-3' alt="" /><span className='fs-5 '>C++</span>
                            </div>
                            <div className=" footer-lang ">
                                <img src={CLang} className='img-fluid me-3' alt="" /><span className='fs-5 '>C Language</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 copyright-section d-flex justify-content-between align-items-center">
                    <p>Copyright reserved 2022 @ CodePair</p>
                    <div className="links d-flex justify-content-evenly ">
                        <a href="http://www.facebook.com/" target={'_blank'} className='footer-link'><i className="fa fa-facebook"></i></a>
                        <a href="http://www.instgram.com/" target={'_blank'} className='footer-link'><i className="fa fa-instagram"></i></a>
                        <a href="http://www.twitter.com/" target={'_blank'} className='footer-link'><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
