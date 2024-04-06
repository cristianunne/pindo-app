import React, { useEffect, useState } from 'react'

import '../../styles/empresas/empresas.css'
import TableSagpyasEmpresas from '../../components/empresas/tables/TableSagpyasEmpresas';
import { getRodalesSagpyasByEmpresaAPI, getSagpyasByEmpresaAPI } from '../../utility/querys';
import TableRodalesEmpresa from '../../components/empresas/tables/TableRodalesEmpresa';

const SagpyasResumenEmpresas = ({empresa}) => {

  const [dataSagpyas, setDataSagpyas] = useState([]);
  const [dataRodalesEmpresa, setDataRodalesEmpresa] = useState([]);
  const [resState, setResState] = useState(false);

  const [dataGraphicBar, setDataGraphicBar] = useState([])
  const [labelsBar, setLabelsBar] = useState([]);
  const [colorsBar, setColorsBar] = useState([]);


  const getDataSagpyasByEmpresa = async () => {

    const data_sagpyas = await getSagpyasByEmpresaAPI(empresa.empresas_id);

    //traigo los datos del rodal
    const data_rodales = await getRodalesSagpyasByEmpresaAPI(empresa.empresas_id);


    if(data_sagpyas){

      setDataSagpyas(data_sagpyas);
    
    }

    if(data_rodales){
      setDataRodalesEmpresa(data_rodales);
    }

    setResState(true);

  }


  useEffect(() => {

    if (!resState) {
      getDataSagpyasByEmpresa();
  }

  }, [resState])

  
  return (
    <>
            <div className="container" style={{ marginBottom: '150px' }}>
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h1 className="text-center text-white">Expedientes Sagpyas asociados con la empresa</h1>
                    </div>

                </div>

                <div className="row row-cards mb-5 justify-content-center">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-sm bg-dark text-green">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <span className="bg-green text-white avatar">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" 
                                            viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" 
                                            strokeLinecap="round" strokeLinejoin="round"><path stroke="none" 
                                            d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2">
                                              </path><path d="M12 3v3m0 12v3"></path></svg>
                                        </span>
                                    </div>
                                    <div className="col">
                                        <div className="font-weight-bold text-green">
                                            Cantidad de Expedientes
                                        </div>
                                        <div className="text-white">
                                            122
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-sm bg-dark text-green">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <span className="bg-green text-white avatar">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" 
                                            height="24" viewBox="0 0 24 24" strokeWidth="2" 
                                            stroke="currentColor" fill="none" strokeLinecap="round" 
                                            strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
                                            fill="none"></path>
                                            <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2">
                                              </path><path d="M12 3v3m0 12v3"></path></svg>
                                        </span>
                                    </div>
                                    <div className="col">
                                        <div className="font-weight-bold text-green">
                                            Superficie Total Aprobada
                                        </div>
                                        <div className="text-white">
                                            6456546456 ha
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="row mt-6 justify-content-center p-0">

                    <div className="col-lg-12">
                        <h2 className="h2 text-white">Lista de Expedientes</h2>
                    </div>

                    <div className="col-lg-12">
                        <div className="card bg-transparent">

                            <div id='card-body-table-rodal-resumen' className="card-body" style={{ maxHeight: '600px', overflow: 'auto' }}>
                              <TableSagpyasEmpresas data_sagpyas={dataSagpyas}></TableSagpyasEmpresas>
                            </div>

                        </div>
                    </div>

                    <div className="hr text-white"></div>

                    <div className="col-lg-12 mt-5">
                        <h2 className="h2 text-white">Lista de Rodales con Sagpya</h2>
                    </div>

                    <div className="col-lg-12 ">
                        <div className="card bg-transparent">
                            <div id='card-body-table-rodal-resumen' className="card-body" style={{ maxHeight: '600px', overflow: 'auto' }}>
                            <TableRodalesEmpresa data_rodales={dataRodalesEmpresa} has_sagpya={true}></TableRodalesEmpresa>
                            
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="container">
                            <div className="row justify-content-center">

                                <div className="col-lg-10 col-md-10">

                                    <div className="card mt-7" style={{ backgroundColor: 'transparent' }}>
                                        <div className="card-body">
                                            <div id="chart-tasks-overview" style={{ height: '600px' }} className='d-flex justify-content-center'>

                                              

                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </div>
                        </div>




                    </div>



                </div>
            </div >
        </>
  )
}

export default SagpyasResumenEmpresas