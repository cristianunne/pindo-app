import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import { useLocation, useParams } from 'react-router-dom'

import '../styles/empresas/empresas-details.css'
import ItemsActions from '../components/items-actions/ItemsActions'
import ResumenGeneral from '../screen/empresas/ResumenGeneral'
import ItemsActionsContainer from '../components/empresas/items-actions/ItemsActionsContainer'
import MainScreenContainer from '../screen/empresas/MainScreenContainer'
import { EmpresasGlobalContext } from '../context/globalcontext'
import { getEmpresasByIdAPI } from '../utility/querys'

const EmpresasDetailsPage = () => {


    const { empresaId } = useParams();

    const { state } = useLocation();
    
    //const { empresa } = state != null ?  state.empresa : null;

    const [screen, setScreen] = useState(null);
    const [stateScreen, setStateScreen] = useState(false);
    const [empresa, setEmpresa] = useState(null);


    const getEmpresa = async () => {

        const empresa_data = await getEmpresasByIdAPI(empresaId);

        if(empresa_data){

            setEmpresa(empresa_data[0]);

        }

        setStateScreen(true);

    }


    useEffect(() => {

        console.log('carga eldetail page');
        console.log(empresa);
        if(state == null){
            //traigo la empresa desde la API
            if(!stateScreen){   
                getEmpresa();
            }
         
          

        } else {
            //cargo la empresa desde  USELOCATION
            if(!stateScreen){ 
                setEmpresa(state.empresa);
                setStateScreen(true);

            }
         

        }
      
    })


    return (
        <>
            <Header></Header>

            <EmpresasGlobalContext.Provider value={{
                screen, setScreen,
                stateScreen, setStateScreen
            }}>
                <div className="page-wrapper">
                    <div className="container">

                        <div className="row pt-5">

                            <div className="col-lg-3">

                                <div className="card bg-indigo text-indigo-fg" id='card-empresa-details'>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-lg-2 col-md-3 col-sm-3 d-flex align-items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2"
                                                    stroke="currentColor" fill="none" strokeLinecap="round"
                                                    strokeLinejoin="round" className="img-fluid">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M3 21l18 0"></path>
                                                    <path d="M9 8l1 0"></path>
                                                    <path d="M9 12l1 0"></path>
                                                    <path d="M9 16l1 0"></path>
                                                    <path d="M14 8l1 0"></path>
                                                    <path d="M14 12l1 0"></path>
                                                    <path d="M14 16l1 0"></path>
                                                    <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                                                </svg>
                                            </div>
                                            <div className="col-lg-10 col-md-9 col-sm-9">
                                                <div>
                                                    <h2 className="card-title text-center h2">
                                                        {empresa != null ? empresa.name : null}
                                                        </h2>
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
                                                    <strong>Dirección: </strong> 
                                                    {empresa != null ? empresa.address : null}
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
                                                    <strong>Email: </strong> 
                                                    {empresa != null ? empresa.email : null}
                                        
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
                                                    <strong>Código: </strong> 
                                                    {empresa != null ? empresa.sap_id : null}
                                
                                                </div>


                                                <div className="mb-2">

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-text"
                                                        width="24" height="24" viewBox="0 0 24 24"
                                                        strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                                        <path d="M9 9l1 0"></path>
                                                        <path d="M9 13l6 0"></path>
                                                        <path d="M9 17l6 0"></path>
                                                    </svg>
                                                    <strong>Teléfono: </strong> 
                                                    
                                                    {empresa != null ? empresa.phone : null}
                                                 
                                                </div>


                                                <div className="mb-2">

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-text"
                                                        width="24" height="24" viewBox="0 0 24 24"
                                                        strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                                        <path d="M9 9l1 0"></path>
                                                        <path d="M9 13l6 0"></path>
                                                        <path d="M9 17l6 0"></path>
                                                    </svg>
                                                    <strong>CUIT: </strong> 
                                                    
                                                    {empresa != null ? empresa.cuit : null}
                                      
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hr-text">Acciones</div>
                                <div className="card mt-5 bg-dark">

                                    <ItemsActionsContainer></ItemsActionsContainer>
                                </div>

                            </div>

                            <div className="col-lg-9 div-main-container" id='div-main-container'>

                                <MainScreenContainer empresa={empresa}>

                                </MainScreenContainer>

                            </div>


                        </div>

                    </div>

                </div>

            </EmpresasGlobalContext.Provider>



        </>
    )
}

export default EmpresasDetailsPage