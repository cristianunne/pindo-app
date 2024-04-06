import React from 'react'
import HomeIcon from '../../icons/HomeIcon'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

    const onClickHome = () => {

        
        navigate('/');

    }


    return (
        <header className="navbar navbar-expand-md d-print-none" data-bs-theme="dark" style={{backgroundColor: '#010013'}}>
            <div className="container-xl"  style={{'justifyContent': 'end'}}>

                <div className="navbar-nav flex-row order-md-last">

                <div className="nav-item d-none d-md-flex me-3">
                        <a onClick={onClickHome} className="btn btn-bitbucket w-100">
                       
                          <HomeIcon width={24} height={24}></HomeIcon>
                          Inicio
                        </a>
                        
                    </div>


                    <div className="nav-item d-none d-md-flex me-3">
                        <a href="#" className="btn btn-bitbucket w-100">
                       
                          <svg xmlns="http://www.w3.org/2000/svg" 
                          className="icon" width="24" height="24" 
                          viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" 
                          fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3.648 4a.64 .64 0 0 0 -.64 .744l3.14 14.528c.07 .417 .43 .724 .852 .728h10a.644 .644 0 0 0 .642 -.539l3.35 -14.71a.641 .641 0 0 0 -.64 -.744l-16.704 -.007z">
                                </path><path d="M14 15h-4l-1 -6h6z"></path></svg>
                          Bitbucket
                        </a>
                        
                    </div>

                    
                 
                  
                </div>
            </div>
        </header>
    )
}

export default Header