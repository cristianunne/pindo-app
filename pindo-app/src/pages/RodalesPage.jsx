import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import TableRodales from '../components/rodales/tables/TableRodales'
import { getRodalesByUsoAPI } from '../utility/querys'

import '../styles/rodales/rodales_index.css'



const RodalesPage = () => {

    const [state, setState] = useState(false);
    const [dataDataRodales, setDataRodales] = useState([]);

    

    const getRodales = async () => {

        const data_rodales = await getRodalesByUsoAPI();

        if(data_rodales){
            console.log(data_rodales);

            setDataRodales(data_rodales);
            setState(true);
        }

     
    }

    useEffect(() => {

        if(!state){
            getRodales();

        }

      

    }, [state]);

    return (
        <>
            <Header></Header>

            <div className="page-wrapper">
                <div className="container rodales-container-index">

                    <div className="row pt-5 justify-content-center mt-7 row-rodales-container">

                        <div className="col-lg-10 mb-5">
                            <h2 className="h2 text-white">Lista de Rodales</h2>
                        </div>

                        <div className="col-lg-10 ">
                            <div className="card bg-transparent">
                                <div id='card-body-table-rodal-resumen' className="card-body" style={{ maxHeight: '900px', overflow: 'auto' }}>

                                    <TableRodales data_rodales={dataDataRodales}></TableRodales>

                            
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

            </div>
            
        </>
    )
}

export default RodalesPage