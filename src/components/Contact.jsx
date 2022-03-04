import React from 'react'

export const Contact = () => {
    return (
        <div className='container contact '>
            <div className="row ">
                <div className="col-7">
                    <form className='contact-form text-light'>
                        <div>
                            <p className="fs-4">Contact Us</p>
                            <h1>Get in Touch</h1>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <label for="exampleInputEmail1" className="form-label">First Name</label>
                                <input type="email" className="form-control bg-transparent" placeholder='First Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="">
                                <label for="exampleInputPassword1" className="form-label">Last Name</label>
                                <input type="password" className="form-control bg-transparent" placeholder='Last Name' id="exampleInputPassword1" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control bg-transparent" placeholder='Email address' id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control bg-transparent" placeholder='Subject' id="exampleInputPassword1" />
                            </div>
                        </div>
                        <div className="">
                            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                            <textarea className="form-control bg-transparent" id="exampleFormControlTextarea1 " placeholder='Description' rows="3"></textarea>
                        </div>
                        <div className=''>
                            <button type="submit" className="btn btn-primary ">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-5">
                    <img src="https://s3-us-west-2.amazonaws.com/capublic/blog/56/code-editor.png" class="img-fluid" alt="" />
                </div>
            </div>
        </div>
    )
}
