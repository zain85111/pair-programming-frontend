import React from 'react'
import { Link } from 'react-router-dom'


export const AdminNav = () => {
    const notifications = [
        {
            'id':'001',
            'title': 'Problem A92 Solved',
            'time':'10 min ago',
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU',
        },
        {
            'id':'002',
            'title': 'Request Recieved for changes',
            'time':'35 min ago',
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU',
        },
        {
            'id':'003',
            'title': 'User f39 Messaged',
            'time':'12 hrs ago',
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU',
        },
    ]

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent text-light">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="/">Code Pair</a>
                    <div className="icons text-light d-flex justify-content-evenly align-items-center ">
                        <Link to={'/messeges'} className="btn btn-dark bg-transparent border-0 material-icons"><span className="material-icons">message</span></Link>
                        <div class="btn-group drpstart">
                            <button className="btn btn-dark bg-transparent border-0  material-icons" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"><span className="material-icons">notifications</span></button>

                            <ul className="dropdown-menu dropdown-menu-lg-end" id='notification-section' aria-labelledby="dropdownMenuButton">
                                <div className=" mx-2 mb-2 d-flex justify-content-between align-items-center">
                                    <h4>Notification</h4>
                                    <button className='btn btn-light btn-sm bg-transparent'>Mark all as read</button>
                                </div>
                                {
                                    notifications.map(n => (
                                        <li>
                                            <a className="dropdown-item mb-5 d-flex align-items-center" href={'#'+n.id}>
                                                <div className='me-3'>
                                                    <img src={n.imgUrl} alt="" className="img-fluid circle-img" width={70}/>
                                                </div>
                                                <div>
                                                    <p>{n.title}</p>
                                                    <p className='text-secondary'>{n.time}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <Link to={'/profile'} className="btn btn-dark bg-transparent border-0 material-icons"><span className="material-icons">account_circle</span></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
