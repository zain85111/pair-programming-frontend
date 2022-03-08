import React from 'react'
import { Link } from 'react-router-dom'
import {AdminNav} from '../components/AdminNav';
import { AdminSidebar } from '../components/AdminSidebar';

export const AdminComplains = () => {
    const complains = [
        {
            'id':'001',
            'title': 'Problem A92 Solved',
            'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ducimus doloribus perferendis eum dignissimos. Voluptas recusandae odio ea est quam!',
            'time':'10 min ago',
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU',
        },
        {
            'id':'002',
            'title': 'Request Recieved for changes',
            'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ducimus doloribus perferendis eum dignissimos. Voluptas recusandae odio ea est quam!',
            'time':'35 min ago',
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU',
        },
        {
            'id':'003',
            'title': 'User f39 Messaged',
            'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ducimus doloribus perferendis eum dignissimos. Voluptas recusandae odio ea est quam!',
            'time':'12 hrs ago',
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU',
        },
    ]

    return (
        <div className='App'>
           <AdminNav/>
            <div className='d-flex justify-content-start pageHeight bg-light'>
                <AdminSidebar active='complains'/>
                <div className="form-section col pt-4 d-flex flex-column justify-content-evenly align-items-center">
                    <div className=' w-75 '>
                        <div className="  mb-4 d-flex justify-content-between align-items-center">
                            <h4>Complains</h4>
                            <button className='btn btn-light btn-sm bg-transparent'>Mark all as read</button>
                        </div>
                        {complains.map(u => (
                            <div className="mb-5 card-section d-flex  align-items-center">
                                <div className='me-5'>
                                    <img src={u.imgUrl} alt="" className="img-fluid circle-img" width={100}/>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p><span>{u.title}</span></p>
                                        <Link to={'#' + u.id} className="btn btn-light"><span class="material-icons">subdirectory_arrow_left</span></Link>
                                       
                                    </div>
                                    <p ><b>Details:</b> <span><p >{u.description }</p></span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
