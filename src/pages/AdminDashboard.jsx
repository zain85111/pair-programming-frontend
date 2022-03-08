import React from 'react'
import { Link } from 'react-router-dom'
import {AdminNav} from '../components/AdminNav';
import { AdminSidebar } from '../components/AdminSidebar';

export const AdminDashboard = () => {


    return (
        <div className='App'>
           <AdminNav/>
            
            <div className='d-flex justify-content-start pageHeight bg-light'>
                <AdminSidebar active='stats'/>
                <div className="col d-flex flex-column justify-content-center mb-5">
                    <div class="container px-5 text-light">
                        <div class="row g-5">
                            <div class="col-6">
                                <div class="p-3  border bg-primary ">
                                    <h4>Total Visitor</h4>
                                    <h1>76</h1>
                                    <Link to={'#'} className='d-flex justify-content-center  align-items-center stats-link mt-5  py-2'>
                                        <h6  className="me-3 mt-2">More Info </h6>
                                        <span class="material-icons">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="p-3  border bg-success ">
                                    <h4>Total Feedback</h4>
                                    <h1>23</h1>
                                    <Link to={'#'} className='d-flex justify-content-center  align-items-center stats-link mt-5 py-2'>
                                        <h6  className="me-3 mt-2">More Info </h6>
                                        <span class="material-icons">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="p-3  border bg-danger ">
                                    <h4>Total Complains</h4>
                                    <h1>10</h1>
                                    <Link to={'#'} className='d-flex justify-content-center  align-items-center stats-link mt-5 py-2'>
                                        <h6  className="me-3 mt-2">More Info </h6>
                                        <span class="material-icons">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="p-3  border bg-warning ">
                                    <h4>Total Users</h4>
                                    <h1>44</h1>
                                    <Link to={'#'} className='d-flex justify-content-center  align-items-center stats-link mt-5 py-2'>
                                        <h6  className="me-3 mt-2">More Info </h6>
                                        <span class="material-icons">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
