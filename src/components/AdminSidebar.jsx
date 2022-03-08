import React from 'react'
import { Link } from 'react-router-dom'

export const AdminSidebar = ({ active }) => {
    const activeClass = {
        'stats': '',
        'user': '',
        'problem': '',
        'complain': '',
        'feedback': '',
    }
    
    switch(active) {
        case 'stats':
            activeClass.stats = "active";
            break;
        case 'users':
            activeClass.user = "active";
            break;
        case 'problems':
            activeClass.problem = "active";
            break;
        case 'complains':
            activeClass.complain = "active";
            break;
        case 'feedback':
            activeClass.feedback = "active";
            break;
        default:
            // code block
    }

    return (
        <div className='sidebar'>
            <div className="sideNav w-75 d-flex flex-column justify-content-aroun align-items-center">
                <div className='d-flex flex-column justify-content-between  w-100 mt-5 px-4'>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className='mb-3 text-left'>Admin Panel</h3>
                        <p class="material-icons">info</p>
                    </div>
                    <div>
                        <Link to={'/adminDashboard'} className="admin-link">
                            <li className={'sideNav-btn mb-3'+' '+activeClass.stats}><b>Statistics</b></li>
                        </Link>
                        <Link to={'/adminUsers'} className="admin-link">
                            <li className={'sideNav-btn mb-3'+' '+activeClass.user}><b>User Profiles</b></li>
                        </Link>
                        <Link to={'/adminProblems'} className="admin-link">
                            <li className={'sideNav-btn mb-3'+' '+activeClass.problem}><b>Promblems</b></li>
                        </Link>
                        <Link to={'/adminComplains'} className="admin-link">
                            <li className={'sideNav-btn mb-3'+' '+activeClass.complain}><b>Complains</b></li>
                        </Link>
                        <Link to={'/adminFeedback'} className="admin-link">
                            <li className={'sideNav-btn mb-3'+' '+activeClass.feedback}><b>Feedback</b></li>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
