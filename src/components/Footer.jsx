import React from 'react'

export const Footer = () => {
    return (
        <div>
            <footer className='footer container '>
                <div className=" d-flex justify-content-between">
                    <div className="footer-content">
                        <h2>Code Effectively With Your Teammate on CodePair.</h2>
                        <h6>Address</h6>
                        <p>Punjab University of Computing and Information Technology, Old Anarkali Lahore.</p>
                        <h6>Email</h6>
                        <p>info@CodePair.com</p>
                        <h6>Help</h6>
                        <p>Contact Us</p>
                    </div>
                    <div className="code-imgs">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmNr0NOsWaNOpPLb0dFTkBDlwD0G4xg2r7Q&usqp=CAU" className='img-fluid' alt="" width={450} />
                    </div>
                </div>
                <div className="mt-5 copyright-section d-flex justify-content-between ">
                    <p>Copyright reserved 2022 @ CodePair</p>
                    <div className="links d-flex justify-content-evenly w-25">
                        <p>facebook</p>
                        <p>instagram</p>
                        <p>twitter</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
