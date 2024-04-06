import React, { useEffect, useState } from 'react'
import Bar from '../../graphics/Pie'
import { getResumenPlantacionesByUsoAPI, getSuperficiePlantacionesByYearsEmpresaAPI } from '../../../utility/querys'

import '../../../styles/tables/tables.css'
import TableResumenUsoSuperficie from '../tables/TableResumenUsoSuperficie'
import Barras from '../../graphics/Barras'

import '../../../styles/empresas/empresas-details.css'

const UsoResumenGraphicsContainer = ({ empresa }) => {

    //hago la consulta y traigo el datos necesario para contruir el grafico
    const [dataUsos, setDataUsos] = useState([]);
    const [dataSuperficieYears, setDataSuperficieYears] = useState([]);
    const [resState, setResState] = useState(false);

    const [dataGraphic, setDataGraphic] = useState([])
    const [labels, setLabels] = useState([]);
    const [colors, setColors] = useState([]);

    const [dataGraphicBar, setDataGraphicBar] = useState([])
    const [labelsBar, setLabelsBar] = useState([]);
    const [colorsBar, setColorsBar] = useState([]);


    const getResumenPlantacion = async () => {
        console.log('Inio la ejecucion de  plantac');
        const data_plantacion_uso = await getResumenPlantacionesByUsoAPI(empresa.empresas_id);
        console.log('Terminado la ejecucion de plant');

        if (data_plantacion_uso) {

            setDataUsos(data_plantacion_uso);

            let data_graphic_ = [];
            let labels_ = [];
            let colors_ = [];

            data_plantacion_uso.forEach((element, index) => {

                let randomColor = Math.floor(Math.random() * 16777215).toString(16);

                colors_.push('#' + randomColor);
                labels_.push(element.uso);


                data_graphic_.push(

                    parseFloat(element.suma_superficie),

                );


            });

            setDataGraphic(data_graphic_);
            setColors(colors_);
            setLabels(labels_);

        }



    }

    const getSuperficieByYears = async () => {
     
        const data_sup_year = await getSuperficiePlantacionesByYearsEmpresaAPI(empresa.empresas_id);
       
        if (data_sup_year) {

            setDataSuperficieYears(data_sup_year);

            let data_graphic_ = [];
            let labels_ = [];
            let colors_ = [];
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            colors_.push('#' + randomColor);

            data_sup_year.forEach((element, index) => {


                labels_.push(element.year.toString());

                data_graphic_.push(parseFloat(element.suma_superficie));


            });



            setDataGraphicBar(data_graphic_);
            setColorsBar(colors_);
            setLabelsBar(labels_);

        }


    }

    const executeFunctions = async () => {

      
        await getResumenPlantacion();
        await getSuperficieByYears();
     
        setResState(true);
    }


    useEffect(() => {

        if (empresa != undefined && !resState) {

           
           executeFunctions();

        }



    }, [empresa, resState])

    return (
        <>
            <div className="col-lg-12">
                <h2 className="h2 text-white">Superficie Total de Plantación por Tipo de Uso</h2>
            </div>

            <div className="col-lg-12">
                <div className="container">

                    <div className="row justify-content-end">
                        <div className="col-lg-3 d-flex align-items-center">

                            <TableResumenUsoSuperficie data_usos={dataUsos}></TableResumenUsoSuperficie>

                        </div>
                        <div className="col-lg-7 col-md-7">

                            <div className="card" style={{ backgroundColor: 'transparent' }}>
                                <div className="card-body" >
                                    <div id="chart-tasks-overview" style={{ height: '600px' }} className='d-flex justify-content-center'>

                                        <Bar title={'Superficie Total de Plantación por Tipo de Uso'}
                                            data_graphic={dataGraphic} name_serie={'Uso'} number_data={dataGraphic.length}
                                            colors={colors} labels={labels}
                                        ></Bar>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>



            </div>

            <div className='hr text-white'></div>

            <div className="col-lg-12">
                <h2 className="h2 text-white">Superficie Total de Plantación por Año</h2>
            </div>

            <div className="col-lg-12">
                <div className="container">
                    <div className="row justify-content-center">

                    <div className="col-lg-7 col-md-7">

                            <div className="card" style={{ backgroundColor: 'transparent' }}>
                                <div className="card-body">
                                    <div id="chart-tasks-overview" style={{ height: '600px' }} className='d-flex justify-content-center'>

                                        <Barras
                                            title={'Superficie Total de Plantación por Año'}
                                            data_graphic={dataGraphicBar} name_serie={'Superficie'} number_data={Object.keys(dataGraphicBar).length}
                                            colors={colorsBar} labels={labelsBar}
                                        ></Barras>

                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>




            </div>
        </>
    )
}

export default UsoResumenGraphicsContainer