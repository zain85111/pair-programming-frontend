import React from 'react'
import { Navigation } from '../components/Navigation'

export const Messages = () => {
  return (
    <div className='App'>
      <Navigation />
      <div className="row center-section mt-3">
        <div className="col-4 text-light">
          <div className="d-flex  align-items-center mt-2">
            <input className='bg-transparent form-control rounded mx-3' type="text" placeholder='Search'/>
            <p className='circle-icon mt-2'><span class="material-icons">segment</span></p>
          </div>
          <div className='mt-4'>
            <div className="chat-card p-2 mb-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU'" alt="" className="circle-img img-fluid me-3" width={50}/>
              <div className='d-flex flex-column justify-content-center align-items center'>
                <h6>John Doe</h6>
                <h6>Lorem ipsum dolor sit amet.</h6>
                <h6 className='text-secondary'>Just Now</h6>
              </div>
              <p><span class="material-icons">more_horiz</span></p>
            </div>
            <div className="chat-card p-2 mb-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU'" alt="" className="circle-img img-fluid me-3" width={50}/>
              <div className='d-flex flex-column justify-content-center align-items center'>
                <h6>John Doe</h6>
                <h6>Lorem ipsum dolor sit amet.</h6>
                <h6 className='text-secondary'>Just Now</h6>
              </div>
              <p><span class="material-icons">more_horiz</span></p>
            </div>
            <div className="chat-card p-2 mb-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU'" alt="" className="circle-img img-fluid me-3" width={50}/>
              <div className='d-flex flex-column justify-content-center align-items center'>
                <h6>John Doe</h6>
                <h6>Lorem ipsum dolor sit amet.</h6>
                <h6 className='text-secondary'>Just Now</h6>
              </div>
              <p><span class="material-icons">more_horiz</span></p>
            </div>
          </div>
        </div>
        <div className="col-8 ">
          <div className="container chat-box d-flex flex-column justify-content-between">
            <div className='chat-box-nav d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU'" alt="" className="circle-img img-fluid me-3" width={35} />
                <h6>John Doe</h6>
              </div>
              <span class="material-icons">more_vert</span>
            </div>
            <div className=" container  h-75 mt-2">
              <div className="row r py-2  mb-3">
                  <div className="col-9 msg">
                    <h6 className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, reiciendis a? Perspiciatis quibusdam possimus laboriosam.</h6>
                  </div>
                  <div className="col-3"></div>
              </div>
              <div className="row py-2  mb-3">
                  <div className="col-3"></div>
                  <div className="col-9 msg">
                    <h6 className='py-2 '>Lorem ipsum dolor sit amet.</h6>
                  </div>
              </div>
            </div>
            <div className="msg-input-section d-flex mb-4 mx-2 align-items-center">
              <div className="d-flex me-3 text-secondary">
                <span class="material-icons">image</span>
                <span class="material-icons">attach_file</span>
                <span class="material-icons">insert_emoticon</span>
              </div>
              <input type="text" className="form-control me-3" placeholder='Enter your message...' />
              <button className="btn btn-success px-4">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
