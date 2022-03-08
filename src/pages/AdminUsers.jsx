import React from 'react'
import { Link } from 'react-router-dom'
import {AdminNav} from '../components/AdminNav';
import { AdminSidebar } from '../components/AdminSidebar';

export const AdminUsers = () => {
    const users = [
        {
            'id':'001',
            'username': 'User s34',
            "status": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.",
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU',
        },
        {
            'id':'002',
            'username': 'User d25',
            "status": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.",
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU',
        },
        {
            'id':'003',
            'username': 'User g92',
            "status": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime repellat, excepturi blanditiis minus dignissimos eligendi amet facere dicta voluptatum iure inventore suscipit repudiandae fugiat sapiente illum similique delectus quasi.",
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU',
        },
        
    ]

    return (
        <div className='App'>
           <AdminNav/>
            <div className='d-flex justify-content-start pageHeight bg-light'>
                <AdminSidebar active='users'/>
                <div className="form-section col pt-4 d-flex flex-column justify-content-evenly align-items-center">
                    <div className=' w-75'>
                        {users.map(u => (
                            <div className="mb-5 h-25 card-section d-flex  align-items-center">
                                <div className='me-5'>
                                    <img src={u.imgUrl} alt="" className="img-fluid circle-img" />
                                </div>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p ><b>Username:</b> <span>{u.username}</span></p>
                                        <Link to={'#'+u.id} className="btn btn-primary ">Send Request</Link>
                                    </div>
                                    <p ><b>Status:</b> <span>{u.status }</span></p>
                                    <p ><b>Description:</b> <span><p >{u.description }</p></span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
