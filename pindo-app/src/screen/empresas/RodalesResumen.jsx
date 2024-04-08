import React, { useEffect, useState } from 'react'
import { getRodalesByEmpresaAPI } from '../../utility/querys';
import TableRodalesEmpresa from '../../components/empresas/tables/TableRodalesEmpresa';

import '../../styles/empresas/empresas.css'
import Barras from '../../components/graphics/Barras';

const RodalesResumen = ({ empresa }) => {

    const [dataRodalesEmpresa, setDataRodalesEmpresa] = useState([]);
    const [resState, setResState] = useState(false);

    const [dataGraphicBar, setDataGraphicBar] = useState([])
    const [labelsBar, setLabelsBar] = useState([]);
    const [colorsBar, setColorsBar] = useState([]);



    const getRodalesByEmpresa = async () => {

        const data_rod_emp = await getRodalesByEmpresaAPI(empresa.empresas_id);

        if (data_rod_emp) {

            setDataRodalesEmpresa(data_rod_emp);

            let data_graphic_ = [];
            let labels_ = [];
            let colors_ = [];

            //let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            colors_.push('#2ecd71');


            data_rod_emp.forEach((element, index) => {


                data_graphic_.push(
                    {
                        'x': element.cod_sap, 'y': parseFloat(element.suma_superficie)
                    }

                );


            });



            setDataGraphicBar(data_graphic_);
            setLabelsBar(labels_);
            setColorsBar(colors_);
        }


        setResState(true);
    }



    useEffect(() => {

        if (!resState) {
            getRodalesByEmpresa();
        }

    }, [resState])

    return (
        <>
            <div className="container" style={{ marginBottom: '150px' }}>
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h1 className="text-center text-white">Rodales administrados por la empresa</h1>
                    </div>

                </div>

                <div class="row row-cards mb-5">
                    <div class="col-sm-6 col-lg-3">
                        <div class="card card-sm bg-dark text-green">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <span class="bg-green text-white avatar">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path><path d="M12 3v3m0 12v3"></path></svg>
                                        </span>
                                    </div>
                                    <div class="col">
                                        <div class="font-weight-bold text-green">
                                            Cantidad de Rodales
                                        </div>
                                        <div class="text-white">
                                            122
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="card card-sm bg-dark text-green">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <span class="bg-green text-white avatar">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path><path d="M12 3v3m0 12v3"></path></svg>
                                        </span>
                                    </div>
                                    <div class="col">
                                        <div class="font-weight-bold text-green">
                                            Superficie Total
                                        </div>
                                        <div class="text-white">
                                            6456546456 ha
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="card card-sm bg-dark text-green">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <span class="bg-green text-white avatar">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path><path d="M12 3v3m0 12v3"></path></svg>
                                        </span>
                                    </div>
                                    <div class="col">
                                        <div class="font-weight-bold text-green">
                                            Superficie Plantada
                                        </div>
                                        <div class="text-white">
                                            784545 ha
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="card card-sm bg-dark text-green">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <span class="bg-green text-white avatar">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path><path d="M12 3v3m0 12v3"></path></svg>
                                        </span>
                                    </div>
                                    <div class="col">
                                        <div class="font-weight-bold text-green">
                                            Superficie Plantada
                                        </div>
                                        <div class="text-white">
                                            5000 ha
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row mt-6 justify-content-center p-0">

                    <div className="col-lg-12">
                        <h2 className="h2 text-white">Lista de Rodales administrados</h2>
                    </div>

                    <div className="col-lg-12">
                        <div className="card bg-transparent">

                            <div id='card-body-table-rodal-resumen' className="card-body" style={{ maxHeight: '600px', overflow: 'auto' }}>
                                <TableRodalesEmpresa data_rodales={dataRodalesEmpresa}></TableRodalesEmpresa>
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

                                                <Barras
                                                    title={'Superficie Plantada y Total por Rodales'}
                                                    data_graphic={dataGraphicBar} name_serie={'Superficie Plantada'} number_data={Object.keys(dataGraphicBar).length}
                                                    colors={colorsBar} labels={labelsBar}
                                                ></Barras>

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

export default RodalesResumen