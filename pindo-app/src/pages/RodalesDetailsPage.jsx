import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import { RodalesGlobalContext } from '../context/globalcontext';
import { getRodalesByUsoAPI, getRodalesGisByIdAPI } from '../utility/querys';
import ItemsActionsRodalesContainer from '../components/rodales/items-actions/ItemsActionsRodalesContainer';
import RodalesIcon from '../icons/RodalesIcon';
import MainScreenContainer from '../screen/rodales/MainScreenContainer';

const RodalesDetailsPage = () => {



    const { rodalId } = useParams();

    const { state } = useLocation();

    const [screen, setScreen] = useState(null);
    const [stateScreen, setStateScreen] = useState(false);

    const [dataRodales, setDataRodales] = useState(null);

    const getRodales = async (idrodal) => {

        const data_rodales = await getRodalesGisByIdAPI(idrodal);

        if (data_rodales) {
         
            setDataRodales(data_rodales);

        }
        setStateScreen(true);

    }



    useEffect(() => {


        //controlo que state no este vacio, sino traigo desde la API los datos
        if (state == null) {
            //traigo la empresa desde la API
            if (!stateScreen) {

                getRodales(rodalId);
              
               
            }



        } else {

            //cargo el rodal desde  USELOCATION
            if (!stateScreen) {
                setDataRodales(state);
                setStateScreen(true);

            }


        }


    })


    return (
        <>
            <Header></Header>

            <RodalesGlobalContext.Provider value={{
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
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div>
                                                    <h2 className="card-title text-center h2">
                                                        {dataRodales != null ? dataRodales.cod_sap : null}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-3 d-flex align-items-start">
                                               <RodalesIcon width={96} height={96}></RodalesIcon>
                                            </div>
                                          
                                            <div className="col-lg-10 col-md-9 col-sm-9">
                                              
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
                                                    <strong>Campo: </strong>
                                                    {dataRodales != null ? dataRodales.campo : null}
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
                                                    <strong>Uso: </strong>
                                                    {dataRodales != null ? dataRodales.usos_rodales__name : null}

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
                                                    <strong>Certificado: </strong>
                                                    {dataRodales != null ? dataRodales.is_certificado == true ? 'Si' : 'No' : null}

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
                                                    <strong>Finalizado: </strong>
                                                    {dataRodales != null ? dataRodales.is_finish == true ? 'Si' : 'No' : null}
                                         

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
                                                    <strong>Empresa: </strong>

                                                    {dataRodales != null ? dataRodales.empresa__name : null}

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hr-text">Acciones</div>
                                <div className="card mt-5 bg-dark">

                                    <ItemsActionsRodalesContainer></ItemsActionsRodalesContainer>

                                   
                                </div>

                            </div>

                            <div className="col-lg-9 div-main-container" id='div-main-container'>

                                <MainScreenContainer rodales={dataRodales}></MainScreenContainer>

                            </div>


                        </div>

                    </div>
                </div>

            </RodalesGlobalContext.Provider>

        </>
    )
}

export default RodalesDetailsPage