import React, { useEffect } from 'react'

import '../../styles/emsefors/emsefors.css'

import EmpresasIcon from '../../icons/EmpresasIcon'
import UserIcon from '../../icons/UserIcon'
import { useNavigate } from 'react-router-dom'

const EmpresasItem = ({ idempresa, name, address, email, empresa }) => {


    const navigate = useNavigate();

    const onClick = () => {

        const url = `/empresas/${idempresa}`;
        navigate(url, {
            state: {empresa}
        })

    }

    useEffect(() => {
       
    })

    return (
        <div className='col-lg-2 col-md-2'>

            <div className="card card-emsefor-item">

                <div className="d-flex justify-content-center align-content-center mt-2">
                    <EmpresasIcon width={100} height={100} id={'icon-empresa'}></EmpresasIcon>

                </div>
                <div className="d-flex justify-content-center align-content-center">
                    <h2 className='mb-0 title-item'>{idempresa}</h2>
                </div>
                <div className="card-body">
                    <div className="mb-2">

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-3d-cube-sphere"
                            width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6 17.6l-2 -1.1v-2.5"></path>
                            <path d="M4 10v-2.5l2 -1.1"></path>
                            <path d="M10 4.1l2 -1.1l2 1.1"></path>
                            <path d="M18 6.4l2 1.1v2.5"></path>
                            <path d="M20 14v2.5l-2 1.12"></path>
                            <path d="M14 19.9l-2 1.1l-2 -1.1"></path>
                            <path d="M12 12l2 -1.1"></path>
                            <path d="M18 8.6l2 -1.1"></path>
                            <path d="M12 12l0 2.5"></path>
                            <path d="M12 18.5l0 2.5"></path>
                            <path d="M12 12l-2 -1.12"></path>
                            <path d="M6 8.6l-2 -1.1"></path>
                        </svg>
                        <strong> Nombre: </strong> {name}
                    </div>

                    <div className="mb-2">

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-text"
                            width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                            <path d="M9 9l1 0"></path>
                            <path d="M9 13l6 0"></path>
                            <path d="M9 17l6 0"></path>
                        </svg>
                        <strong> Dirección: </strong> {address}
                    </div>

                    <div className="mb-2">

                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-text"
                            width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                            <path d="M9 9l1 0"></path>
                            <path d="M9 13l6 0"></path>
                            <path d="M9 17l6 0"></path>
                        </svg>
                        <strong> Email: </strong> {email}
                    </div>

                </div>
                <div className="card-footer">
                    <a onClick={onClick} className="btn btn-ghost-info active w-100">
                        Ver
                    </a>
                </div>

            </div>
        </div>
    )
}

export default EmpresasItem