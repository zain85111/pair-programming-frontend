import React from 'react'
import { Link } from 'react-router-dom'
import {AdminNav} from '../components/AdminNav';
import { AdminSidebar } from '../components/AdminSidebar';

export const AdminProblems = () => {
    const problems = [
        {
            'id':'001',
            'title': 'Problem A92',
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.",
        },
        {
            'id':'002',
            'title': 'Problem A95',
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.",
        },
        {
            'id':'003',
            'title': 'Problem A99',
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.",
        },
    ]

    return (
        <div className='App'>
           <AdminNav />
            <div className='d-flex justify-content-start pageHeight bg-light'>
                <AdminSidebar active='problems'/>
                <div className="form-section col pt-4 d-flex flex-column justify-content-evenly align-items-center">
                    <div className=' w-75 '>
                        {
                            problems.map(p => (
                                
                                <div className="mb-5   card-section">
                                    <div className="d-flex justify-content-between align-items-center">
                                    <p ><b>Title:</b> <span>{p.title}</span></p>
                                    <Link to={'#'+p.id} className="btn btn-light bg-light">Start Coding</Link>
                                    </div>
                                    <p ><b>Description:</b> <span><p >{ p.description}</p></span></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
