import React from 'react'

export const CodingPage = () => {
    return (
        <div className='App'>
            <nav className="navbar navbar-dark bg-transparent text-light">
                <div className="container-fluid d-flex justify-content-between align-items-center ">
                    <div className='d-flex'>
                        <div className='d-flex  me-2  code-btn'>
                            <span class="material-icons me-2">play_arrow</span>Run
                        </div>
                        <div className='d-flex code-btn'>
                            <span class="material-icons me-2">save</span>Save
                        </div>
                        
                    </div>
                    <div className='d-flex  align-items-center mt-2'>
                        <button className='call-btn end-btn me-2'><span class="material-icons">call_end</span></button>
                        <button className='call-btn video-btn me-2'><span class="material-icons">videocam</span></button>
                        <h6 className='me-2'>Online</h6>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFzSDeCJ7jEOCJceGOu897ZOpsNDL_b09sKadR1RpwOyP0Nv6p165vLu2Ocn9DYao2S8&usqp=CAU'} alt="" className="img-fluid circle-img " width={40}/>
                    </div>
                </div>
            </nav>
            <div className=' d-flex justify-content-between code-page '>
                <div className='w-50  d-flex flex-column '>
                    <div className='w-25 my-3 mx-2'>
                        <select className="form-select-sm btn-dark" aria-label=".form-select-sm example">
                            <option selected>Python</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <textarea className="bg-transparent code-area " placeholder='Write your code here...'></textarea>

                </div>
                <div className='divider'></div>
                <div className='w-50 '>
                    <div className='w-5 my-3 mx-3'>
                        <select className="form-select-sm btn-dark" aria-label=".form-select-sm example">
                            <option selected>Result</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="code-area text-light" >
                        <div className="mx-3">
                            <p>Result Here...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
